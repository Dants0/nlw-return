import express from 'express';
import {routes} from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Server running")
})















// get buscar

// post cadastrar infos

// put atualizar infos

// patch atualizar info unica de uma entidade

// delete deletar uma info