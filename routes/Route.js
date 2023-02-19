const express = require('express');
const routeapp = new express.Router;
const MyController = require('./../Controllers/MyController');


routeapp.get('/', MyController.GetAllDate);

routeapp.get('/mypegination', MyController.MyPegination);

routeapp.get('/create', MyController.ViewCreate);

routeapp.post('/create', MyController.Create);

routeapp.post('/createmany', MyController.CreateMany);

routeapp.post('/update', MyController.UpdateData);

routeapp.delete('/delete', MyController.DeleteData);

routeapp.get('/fetchdata', MyController.FetchData);

routeapp.get('/pdf-export', MyController.PdfTblView);

routeapp.get('/pdfexport', MyController.ExportPdf);

routeapp.get('/excel-export', MyController.ExportExcel);

routeapp.get('/costume-excel-export', MyController.ExportCostumeExcel);

routeapp.get('/base46', MyController.BaseCode);

routeapp.get('*', (req, res) => {
    res.status(404).json({ 'status': 404, 'message': 'route not found..!!' });
});

routeapp.put('*', (req, res) => {
    res.status(404).json({ 'status': 404, 'message': 'route not found..!!' });
});

routeapp.post('*', (req, res) => {
    res.status(404).json({ 'status': 404, 'message': 'route not found..!!' });
});

routeapp.delete('*', (req, res) => {
    res.status(404).json({ 'status': 404, 'message': 'route not found..!!' });
});

module.exports = routeapp;