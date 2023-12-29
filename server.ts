import 'dotenv/config';
import runApp from './src/app';

(async () => {
  const port = process.env.PORT || 3001;
  const app = await runApp();

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
})();
