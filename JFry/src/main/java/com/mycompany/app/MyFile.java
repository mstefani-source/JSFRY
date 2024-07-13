package com.mycompany.app;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public class MyFile {

	private String name;
	File tempDirectory;
	File fileWithAbsolutePath;

	public MyFile() {
		this.name = "defaultFile.txt";
	}

	public MyFile(String name) {
		this.name = name;
	}

	public String getFileName() {
		return this.name;
	}

	private File initFile() throws FileNotFoundException, ClassNotFoundException, IOException {

		tempDirectory = new File(System.getProperty("java.io.tmpdir"));

		fileWithAbsolutePath = new File(tempDirectory.getAbsolutePath() + "/" + this.name);

		fileWithAbsolutePath.createNewFile();

		return fileWithAbsolutePath;

	}

	public String createFile() throws FileNotFoundException, ClassNotFoundException, IOException {

		String result = "";
		try {
			File file = initFile();
			result = file.getName();
		} catch (Exception e) {
			e.getLocalizedMessage();
		}

		return result;
	}

	public boolean deleteFile() {
		boolean result = false;
		System.out.println("name of the file = " + this.name);

		File tempDirectory = new File(System.getProperty("java.io.tmpdir"));

		File fileWithAbsolutePath = new File(tempDirectory.getAbsolutePath() + "/" + this.name);

		File fileToDelete = new File(fileWithAbsolutePath + "/" + this.name);

		result = fileToDelete.delete();
		return result;
	}

}
