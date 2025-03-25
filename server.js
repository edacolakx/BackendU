const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

const fs = require("fs");

const rawData = fs.readFileSync("data.json");
const jsonData = JSON.parse(rawData);

app.get("/duties", (req, res) => {
  res.json(jsonData);
});

app.post("/dutyadd", (req, res) => {
  const newData = req.body;

  jsonData.push(newData);

  fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2));

  res.json({ message: "Success", data: newData });
});

app.delete("/dutydelete", (req, res) => {
  const { id } = req.body; // req.body'den gelen id

  // ID'ye sahip veriyi filtrele (id eşleşmeyenleri al)
  const updatedData = jsonData.filter((item) => item.id !== id);

  // Eğer ID'ye sahip bir veri bulunmadıysa
  if (jsonData.length === updatedData.length) {
    return res.status(404).send("Veri bulunamadı");
  }

  // Yeni veriyi data.json dosyasına kaydet
  fs.writeFileSync("data.json", JSON.stringify(updatedData, null, 2));

  // jsonData'yı güncelle
  jsonData.length = 0; // Mevcut diziyi temizle
  jsonData.push(...updatedData); // Güncellenmiş verileri ekle

  res.send("Veri başarıyla silindi");
});

app.put("/update-completed", (req, res) => {
  const { id, completed } = req.body; // req.body'den gelen id ve completed durumu

  // İlgili ID'ye sahip veriyi bul ve güncelle
  const itemIndex = jsonData.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).send("Veri bulunamadı");
  }

  // completed alanını güncelle
  itemIndex.completed = completed;

  // Güncellenmiş veriyi data.json dosyasına kaydet
  fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2));

  res.json({
    message: "Completed durumu güncellendi",
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
