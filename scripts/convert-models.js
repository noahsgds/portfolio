const obj2gltf = require('obj2gltf');
const path = require('path');
const fs = require('fs');

// Chemins des modèles
const models = [
  {
    input: '../public/rp_free_posed_people_BLD/rp_mei_posed_001_BLD/rp_mei_posed_001_100k.obj',
    output: './public/models/rh-model.glb'
  },
  {
    input: '../public/rp_free_posed_people_BLD/rp_dennis_posed_004_BLD/rp_dennis_posed_004_100k.obj',
    output: './public/models/dev-model.glb'
  }
];

async function convertModels() {
  // Créer le dossier models s'il n'existe pas
  if (!fs.existsSync('./public/models')) {
    fs.mkdirSync('./public/models', { recursive: true });
  }

  for (const model of models) {
    try {
      const options = {
        binary: true,
        separate: false,
        checkTransparency: true,
        outputDirectory: path.dirname(model.output)
      };

      await obj2gltf(path.resolve(__dirname, model.input), {
        ...options,
        output: path.resolve(__dirname, model.output)
      });
      
      console.log(`Converted ${model.input} to ${model.output}`);
    } catch (error) {
      console.error(`Error converting ${model.input}:`, error);
    }
  }
}

convertModels(); 