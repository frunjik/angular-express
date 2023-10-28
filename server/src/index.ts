import express, { Express, Request, RequestHandler, Response } from 'express';
import cors from 'cors';
import { FileSystem } from './filesystem/filesystem';
import { getFiles } from './handlers/files';
import { getFolders } from './handlers/folders';

const root = 'C:/Users/Jeroen/Projects';
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.locals.fileSystem = new FileSystem(root);

app.get('/files',   getFiles    as RequestHandler);
app.get('/folders', getFolders  as RequestHandler);

app.listen(port, () => {
    console.log(`serving "${root}" on port ${port}`);
});
