#include<Gl/glut.h>
#include<stdio.h>


void display(void)
{
	glClear(GL_COLOR_BUFFER_BIT);
	
	
	  glClearColor(0.0f, 1.0f, 0.0f, 1.0f);
		glBegin(GL_QUADS);
	
	glColor3f(1,0,0);
	glVertex3f(0,2.0,0.0);
	
		glColor3f(0,0,1);
	glVertex3f(-2.0,0.0,0.0);
	
		glColor3f(1,0,0);
	glVertex3f(2.0,0.0,0.0);
	
			glColor3f(1,0,0);
	glVertex3f(2.0,2.0,0.0);
	glEnd();
	
	glutSwapBuffers();
}


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
