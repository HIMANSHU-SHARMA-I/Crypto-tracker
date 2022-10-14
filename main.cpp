#include<Gl/glut.h>
#include<stdio.h>


//remove the text file and use less things from the code

void keyboard(unsigned char c,int x,int y)
{
	if(c)
	{
		exit(0);
	}
}
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	glutInit(&argc,argv);
	glutInitWindowPosition(300,200);
	glutInitDisplayMode(GL_RGB | GL_DOUBLE);
  
	glutInitWindowSize(500,500);
	glutCreateWindow("my Triagle");
	glutKeyboardFunc(keyboard);
	//callback
	
	glutDisplayFunc(display);
	
	glutMainLoop();
	
	return 1;
}
