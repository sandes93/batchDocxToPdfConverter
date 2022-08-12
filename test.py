import sys
import os
from docx2pdf import convert

path = os.path.dirname(__file__)
inputPath = os.path.join(path, 'test')

for file in os.listdir(inputPath):
	filename = os.fsdecode(file)
	print(filename);
	if filename.endswith('.docx'):
		inputPath = os.path.join(path, filename)
		outputPath = os.path.join(path, f'{filename}.pdf')
		print(inputPath)
		print(outputPath)
		convert(inputPath,outputPath)
	


