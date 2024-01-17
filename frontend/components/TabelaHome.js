import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function BasicEditingGrid() {
  return (
    <div style={{ height: 300, width: '100%', marginTop: '30px' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Projetos', width: 180, editable: true },
  {
    field: 'category',
    headerName: 'Categoria',
    type: 'string',
    editable: true,
    align: 'left',
    headerAlign: 'left',
    headerClassName: 'custom-header-class', // Adiciona uma classe ao cabeçalho da coluna
  },
  {
    field: 'inscritas',
    headerName: 'Inscritas',
    type: 'number',
    editable: true,
    align: 'left',
    headerAlign: 'left',
    headerClassName: 'custom-header-class', // Adiciona uma classe ao cabeçalho da coluna
  },
  {
    field: 'dataPostagem',
    headerName: 'Data da postagem',
    type: 'date',
    width: 180,
    editable: true,
    headerClassName: 'custom-header-class', // Adiciona uma classe ao cabeçalho da coluna
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    category: 'Productivity',
    inscritas: 18,
    dataPostagem: randomCreatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    category: 'Active tasks',
    inscritas: 28,
    dataPostagem: randomCreatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    category: 'Teams',
    inscritas: 1,
    dataPostagem: randomCreatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    category: 'Completed',
    inscritas: 2,
    dataPostagem: randomCreatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    category: 'Completed',
    inscritas: 8,
    dataPostagem: randomCreatedDate(),
  },
];
