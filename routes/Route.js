const express = require('express');
const routeapp = new express.Router;
const MyController = require('./../Controllers/MyController');
const Auth = require('./../middleware/Auth');

routeapp.post('/create', MyController.Create);

routeapp.post('/login', MyController.Login);

routeapp.get('/', Auth, MyController.GetAllDate);

routeapp.get('/user/:id/find', Auth, MyController.UserFindById);

routeapp.get('/mypegination', Auth, MyController.MyPegination);

routeapp.post('/createmany', Auth, MyController.CreateMany);

routeapp.post('/update', Auth, MyController.UpdateData);

routeapp.post('/change-password', Auth, MyController.ChangePassword);

routeapp.post('/update-photo', Auth, MyController.UpdatePhoto);

routeapp.delete('/delete', Auth, MyController.DeleteData);

routeapp.get('/fetchdata', Auth, MyController.FetchData);

routeapp.get('/logout', Auth, MyController.UserLogout);



routeapp.get('/mycruldata', MyController.NodeJsRequest);

routeapp.get('/create', MyController.ViewCreate);

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