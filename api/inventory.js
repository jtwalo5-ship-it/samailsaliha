export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Canvas", stock: 20 },
    { id: 2, name: "Frame", stock: 15 }
  ]);
}

