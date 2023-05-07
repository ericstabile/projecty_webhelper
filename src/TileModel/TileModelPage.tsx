import React, { useState } from 'react';

interface TileModel {
  ID: number;
  TileType: string;
  IsWalkable: boolean;
  IsObsolete: boolean;
  ModelVersion: string;
}

const TileModelPage: React.FC = () => {
  const [tileModel, setTileModel] = useState<TileModel[]>([]);
  const [jsonString, setJsonString] = useState<string>('');
  const [formValues, setFormValues] = useState<TileModel>({
    ID: 0,
    TileType: '',
    IsWalkable: false,
    IsObsolete: false,
    ModelVersion: '',
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result as string) as TileModel[];
          setTileModel(jsonData);
          setJsonString(JSON.stringify(jsonData, null, 2));
          setFormValues(jsonData[0]); // Update form values with first item in array
        } catch (error) {
          console.error(error);
        }
      };
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      {tileModel.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <h2>Tile Model Form</h2>
          {Object.entries(formValues).map(([key, value]) => (
            <div key={key}>
              <label>{key}</label>
              {typeof value === 'boolean' ? (
                <input type="checkbox" name={key} checked={value} onChange={handleInputChange} />
              ) : (
                <input type="text" name={key} value={value} onChange={handleInputChange} />
              )}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Please upload a JSON file.</p>
      )}
    </div>
  );
};

export default TileModelPage;
