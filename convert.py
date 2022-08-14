import sys
import os, stat
from docx2pdf import convert
from pathlib import Path


path = os.path.dirname(__file__)
inputPath = os.path.join(path, 'test')
print("inputpath", inputPath)

def list_files(dir):
    r = []
    for root, dirs, files in os.walk(dir):
        for name in files:
			# os.chmod(Path(file), int('0777'))
            r.append(os.path.join(root, name))
    return r

files = list_files(inputPath);
print(files)

for file in files:
	# filename = os.fsdecode(file)
	# print(filename);
	if file.endswith('.docx'):
		# src = os.path.join(inputPath, filename)
		print(file);
		os.chmod(os.path.normpath(file), int('0777'))
		outputPath = os.path.join(path, f'{file}.pdf')
		print(outputPath)
		convert(file,outputPath)