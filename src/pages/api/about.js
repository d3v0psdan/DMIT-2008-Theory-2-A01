import profileData from '@/data/profile.json';

const HTTP = {
    OK: 200,
    METHOD_NOT_ALLOWED: 405,
};

export default function handler(req, res) {
    if (req.method !== 'GET') 
        return res.status(HTTP.METHOD_NOT_ALLOWED).json({ message: "Method Not Allowed" });

    return res.status(HTTP.OK).json(profileData.about);
}