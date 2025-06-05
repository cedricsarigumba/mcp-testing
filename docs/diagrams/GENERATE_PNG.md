# Generating Diagram Images

This document provides instructions for generating image files from the PlantUML sequence diagrams.

## Prerequisites

To generate images from PlantUML files, you'll need:

1. Java Runtime Environment (JRE)
2. PlantUML JAR file

## Installation

### Installing Java

If you don't have Java installed:

- **Windows**: Download and install from [java.com](https://www.java.com/download/)
- **macOS**: `brew install --cask java`
- **Linux**: `sudo apt install default-jre` (Ubuntu/Debian) or `sudo yum install java` (CentOS/RHEL)

### Getting PlantUML

1. Download the PlantUML JAR file from [PlantUML website](https://plantuml.com/download)
2. Or use package managers:
   - **macOS**: `brew install plantuml`
   - **Linux**: `sudo apt install plantuml` (Ubuntu/Debian)

## Generating Images

### Command Line

Generate a PNG file:

```bash
java -jar plantuml.jar pet_api_sequence_diagram.puml
```

Generate an SVG file:

```bash
java -jar plantuml.jar -tsvg pet_api_sequence_diagram.puml
```

### VS Code Integration

1. Install the "PlantUML" extension in VS Code
2. Open the .puml file
3. Press Alt+D to preview
4. Export to PNG/SVG using the extension's export options

### Online Generation

If you don't want to install anything locally, you can use the online PlantUML server:

1. Copy the contents of your .puml file
2. Go to [PlantUML Web Server](http://www.plantuml.com/plantuml/uml/)
3. Paste your PlantUML code
4. Download the generated image
