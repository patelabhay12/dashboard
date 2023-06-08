import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {

  const row = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delevery",
      status: "Approved"
    },
    {
      id: 1143156,
      product: "Hp Pavelian",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "Mayank Bhai",
      date: " 14 Feb",
      amount: 78000,
      method: "Paytm",
      status: "Approved"
    },
    {
      id: 1143157,
      product: "Asus vivobook 15",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "Kajal Bhabhi ji ",
      date: "4 April",
      amount: 21000,
      method: "Mayank Bhai",
      status: "Approved"
    },
    {
      id: 1143158,
      product: "Acer Hd",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "Nitin Kumar",
      date: "10 june",
      amount: 30403,
      method: "Cash On Delevery",
      status: "Approved"
    },
    {
      id: 1143159,
      product: "Lenovo",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "RItesh Gupta",
      date: "10 March",
      amount: 1000,
      method: "Cash On Delevery",
      status: "Approved"
    },
    {
      id: 1143160,
      product: "Asus Vivobook 14",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "Abhay Patel",
      date: "8 May",
      amount: 49999,
      method: "Paytm",
      status: "Approved"
    },
    {
      id: 1143161,
      product: "Macbook",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "Unknown",
      date: "10 Sept",
      amount:20302,
      method: "Cash On Delevery",
      status: "Approved"
    },
    {
      id: 1143162,
      product: "Acer",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "Smith",
      date: "14 March",
      amount: 7852,
      method: "Cash On Delevery",
      status: "Approved"
    },
    {
      id: 1143163,
      product: "MI VivoBook ",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UV327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "19 March",
      amount: 78453,
      method: "Cash On Delevery",
      status: "Approved"
    }
  ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="h1" className="image" />
                  {row.product}
                 </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables;