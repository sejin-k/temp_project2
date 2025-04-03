"use client";
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import Image from 'next/image';

export default function ProductTable({ products }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="shadow-lg max-w-7xl mx-auto">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>상품이미지</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell align="right">가격</TableCell>
            <TableCell align="right">최근 6개월 판매량</TableCell>
            <TableCell align="right">리뷰 수</TableCell>
            <TableCell align="right">찜 수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product) => (
              <TableRow key={product.productId}>
                <TableCell>
                    <div className="relative" style={{position: 'relative', width: '150px', height: '150px' }}>
                        <img
                            src={product.imageUrl}
                            alt={product.productName}
                            className="rounded-md object-cover"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-500">{product.productName}</a>
                  </div>
                </TableCell>
                <TableCell align="right">
                  {product.price?.toLocaleString()}원
                </TableCell>
                <TableCell align="right">
                  {product.purchaseCnt?.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {product.reviewCnt?.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {product.wishCnt?.toLocaleString()}
                </TableCell>
                {/* <TableCell align="right">
                  {product.expectedSales.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {product.expectedRevenue.toLocaleString()}
                </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="페이지당 행 수"
      />
    </TableContainer>
  );
} 