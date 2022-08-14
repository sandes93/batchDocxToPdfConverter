import sys
import os, stat
from docx2pdf import convert

NO_OTHER_WRITING = ''

path = os.path.dirname(__file__)
inputPath = os.path.join(path, 'test')
print("inputpath", inputPath)

for file in os.listdir(inputPath):
	filename = os.fsdecode(file)
	print(filename);
	if filename.endswith('.docx'):
		src = os.path.join(inputPath, filename)
		print(src);
		os.chmod(src, int('0777'))
		outputPath = os.path.join(path, f'{filename}.pdf')
		print(outputPath)
		convert(src,outputPath)