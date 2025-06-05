# How to Generate PNG from PUML file

To generate a PNG image from the PlantUML file, you have several options:

## Option 1: Using Visual Studio Code

1. Install the "PlantUML" extension in VS Code
2. Open the .puml file
3. Right-click in the editor and select "Preview Current Diagram" or use Alt+D to preview
4. Use the extension's export feature to save as PNG

## Option 2: Using Online PlantUML Server

1. Copy the contents of the .puml file
2. Visit http://www.plantuml.com/plantuml/uml/
3. Paste the contents into the editor
4. The diagram will render automatically
5. Use the "Save as PNG" option to download the image

## Option 3: Using PlantUML Command Line

If you have Java installed and PlantUML JAR downloaded:

```bash
java -jar plantuml.jar pet_api_sequence_diagram.puml
```

This will generate pet_api_sequence_diagram.png in the same directory.

## Option 4: Using PlantUML Docker Image

If you have Docker installed:

```bash
docker run --rm -v $(pwd):/data plantuml/plantuml pet_api_sequence_diagram.puml
```

This will generate the PNG file in the current directory.
