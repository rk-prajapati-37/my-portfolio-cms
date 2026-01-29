import { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
import { client as readClient } from '../lib/sanity';

const PROJECT_ID = 'i8n8hd39';
const DATASET = 'production';
const API_VERSION = '2024-01-01';

function getWriteClient() {
  const token = import.meta.env.VITE_SANITY_WRITE_TOKEN || process.env.REACT_APP_SANITY_WRITE_TOKEN;
  if (!token) return null;
  return createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: API_VERSION,
    useCdn: false,
    token,
  });
}

export default function SocialPostEditor() {
  const [platforms, setPlatforms] = useState([]);
  const [form, setForm] = useState({
    platform: '',
    title: '',
    postType: 'text',
    content: '',
    externalLink: '',
    status: 'draft',
    scheduledDate: '',
    hashtags: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const writeClient = getWriteClient();

  useEffect(() => {
    readClient.fetch(`*[_type == "socialMedia"]{_id, platform, url}`).then(setPlatforms).catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!writeClient) {
      setMessage('Write token missing. Set VITE_SANITY_WRITE_TOKEN in your env to enable creation.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      let featuredImage = null;
      if (file) {
        const asset = await writeClient.assets.upload('image', file, { filename: file.name });
        featuredImage = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
      }

      const hashtagsArray = form.hashtags ? form.hashtags.split(',').map(h => h.trim()).filter(Boolean) : [];

      const doc = {
        _type: 'socialPost',
        platform: form.platform ? { _type: 'reference', _ref: form.platform } : undefined,
        title: form.title || undefined,
        postType: form.postType,
        content: form.content || undefined,
        externalLink: form.externalLink || undefined,
        featuredImage: featuredImage || undefined,
        status: form.status,
        scheduledDate: form.scheduledDate || undefined,
        hashtags: hashtagsArray.length ? hashtagsArray : undefined,
        createdAt: new Date().toISOString(),
      };

      const created = await writeClient.create(doc);
      setMessage(`Created post with id ${created._id}`);
      setForm({ platform: '', title: '', postType: 'text', content: '', externalLink: '', status: 'draft', scheduledDate: '', hashtags: '' });
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage('Error creating post — check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
      <h3 className="text-lg font-bold mb-4">Quick Social Post Editor</h3>
      {!writeClient && (
        <div className="mb-4 p-3 bg-yellow-800 text-yellow-50 rounded">
          Frontend creation disabled — set <strong>VITE_SANITY_WRITE_TOKEN</strong> in your environment and restart dev server.
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
        <label className="text-sm">Platform</label>
        <select name="platform" value={form.platform} onChange={handleChange} className="p-2 bg-gray-800 rounded">
          <option value="">-- select --</option>
          {platforms.map(p => <option key={p._id} value={p._id}>{p.platform}</option>)}
        </select>

        <label className="text-sm">Title</label>
        <input name="title" value={form.title} onChange={handleChange} className="p-2 bg-gray-800 rounded" />

        <label className="text-sm">Post Type</label>
        <select name="postType" value={form.postType} onChange={handleChange} className="p-2 bg-gray-800 rounded">
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="link">Link</option>
          <option value="story">Story</option>
        </select>

        <label className="text-sm">Content / Caption</label>
        <textarea name="content" value={form.content} onChange={handleChange} className="p-2 bg-gray-800 rounded" rows={3} />

        <label className="text-sm">External Link</label>
        <input name="externalLink" value={form.externalLink} onChange={handleChange} className="p-2 bg-gray-800 rounded" />

        <label className="text-sm">Featured Image (optional)</label>
        <input type="file" accept="image/*" onChange={handleFile} />

        <label className="text-sm">Hashtags (comma separated)</label>
        <input name="hashtags" value={form.hashtags} onChange={handleChange} className="p-2 bg-gray-800 rounded" />

        <label className="text-sm">Scheduled Date/Time</label>
        <input type="datetime-local" name="scheduledDate" value={form.scheduledDate} onChange={handleChange} className="p-2 bg-gray-800 rounded" />

        <div className="flex gap-2 items-center">
          <button disabled={loading} className="bg-green-600 px-4 py-2 rounded font-semibold">{loading ? 'Saving...' : 'Create Post'}</button>
          <p className="text-sm text-gray-400">Status: </p>
          <select name="status" value={form.status} onChange={handleChange} className="p-2 bg-gray-800 rounded">
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="published">Published</option>
          </select>
        </div>
      </form>

      {message && <div className="mt-4 p-3 bg-gray-800 rounded text-sm">{message}</div>}
    </div>
  );
}
