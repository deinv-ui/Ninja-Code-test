import React, { useRef, useState,  } from 'react';
import { SideBarContainer, Icon,  
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    Content,
    Contenttitle,
    Contenth1, 
    Contenth2,
    Contentp,
    UnorderedList,
    NavBtnLink,
    EditorContainer,
    DialogBox,
    Containerti } from '../LanguageElements';

import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/monokai';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../../navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Python = () => {
  const introSection = useRef(null);
  const startSection = useRef(null);
  const syntaxSection = useRef(null);
  const commentSection = useRef(null);
  const varSection = useRef(null);


  const aceEditorRef = useRef(null);

  const resetCode = () => {
    if (aceEditorRef.current) {
      aceEditorRef.current.editor.setValue(''); // Reset the editor's value to an empty string
    }
  };
  
  const [codee, setCode] = useState(''); // State to store the Python code
  const [output, setOutput] = useState(''); // State to store the code execution output

  const executeCode = () => {
    try {
      // Use eval() to execute the Python code and store the output in the state
      const result = eval(codee);
      setOutput(result.toString());
    } catch (error) {
      // Handle any errors that may occur during code execution
      setOutput('Error: ' + error.message);
    }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage the visibility of the dialog box
  const [codeLink, setCodeLink] = useState(''); // State to store the link of the code

  const shareCode = () => {
    try {
      // Use eval() to execute the Python code and store the output in the state
      const result = eval(code);
      setOutput(result.toString());
  
      // Generate the code link (you can use any method to generate a unique link)
      const link = 'https://your-website.com/codes/' + Math.random().toString(36).substr(2, 9);
      setCodeLink(link);
  
      // Open the dialog box
      setIsDialogOpen(true);
    } catch (error) {
      // Handle any errors that may occur during code execution
      setOutput('Error: ' + error.message);
    }
  };

  
  
  
 
  const scrollDown = () => {
    window.scrollTo({
      top: introSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollDown2 = (startSection) => {
    window.scrollTo({
      top: startSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollDown3 = (syntaxSection) => {
    window.scrollTo({
      top: syntaxSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollDown4 = (commentSection) => {
    window.scrollTo({
      top: commentSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollDown5 = (varSection) => {
    window.scrollTo({
      top: varSection.current.offsetTop,
      behavior: 'smooth',
    });
  };
 
  

  const codeString2 = `
  """
  This is a comment
  written in
  more than just one line
"""
  print("Hello, World!")`

  const codeString3 = `
  x = 5
  y = "John"
  print(x)
  print(y)`

  const codeString4 = `
  x = 4       # x is of type int
  x = "Sally" # x is now of type str
  print(x)
`

  const codeString5= `
  x = str(3)    # x will be '3'
  y = int(3)    # y will be 3
  z = float(3)  # z will be 3.0
 
`

  const codeString1 = `
  print("Hello, World!") 
  #This is a comment`
  
  const codeString = `
  #print("Hello, World!") 
  print("Cheers, Mate!")`
  const code = `
  # This is a comment
  # written in
  # more than just one line

  print("Hello, World!")`;
  const now = 0;
  const then = 20;
  const ltr = 40;
  const six = 60;
  const egh = 80;
  const hun = 100;
  return (
   <><Navbar />
  
   <SideBarContainer>
           
            <SideBarWrapper>
            <SideBarMenu>
                
                <SideBarLink onClick={() => scrollDown(introSection)}>
                Python Intro
                </SideBarLink>
                
                <SideBarLink onClick={() => scrollDown2(startSection)}>
                Python Get Started
                </SideBarLink>
                <SideBarLink onClick={() => scrollDown3(syntaxSection)}>
                Python Syntax
                </SideBarLink>
                <SideBarLink onClick={() => scrollDown4(commentSection)}>
                Python Comment
                </SideBarLink>
                <SideBarLink onClick={() => scrollDown5(varSection)}>
                Python Variable <br></br>(Code Editor)
                </SideBarLink>

                
                
            </SideBarMenu>
           
        </SideBarWrapper>  
        </SideBarContainer>

        <Content>
        <ProgressBar now={now} label={`${now}%`} />
        <Containerti>
        <Icon />
        <Contenttitle ref={introSection}>Python Intro</Contenttitle>
        </Containerti>
        <Contenth1>What is Python?</Contenth1>
                  <Contentp>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
                    It is used for:
                    <UnorderedList>
                      <li>web development (server-side),</li>
                      <li>software development,</li>
                      <li>mathematics,</li>
                      <li>system scripting.</li>
                      </UnorderedList>

                      <Contenth2>What can Python do?</Contenth2>
                      <UnorderedList>
                      <li>used on a server to create web applications.</li>
                      <li>used alongside software to create workflows.</li>
                      <li> connect to database systems. It can also read and modify files.</li>
                      <li>used to handle big data and perform complex mathematics.</li>
                      </UnorderedList>

                      <Contenth2>Why Python?</Contenth2>
                      <UnorderedList>
                      <li>works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
                      <li>has a simple syntax similar to the English language.</li>
                      <li> has syntax that allows developers to write programs with fewer lines than some other programming languages.</li>
                      <li> runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
                      </UnorderedList>
</Contentp>
        </Content>

        <Content>
        <ProgressBar now={then} label={`${then}%`} />
        <Contenttitle ref={startSection}>Python Getting Started</Contenttitle>
        <Contenth1>Python Install</Contenth1>
                  <Contentp>Many PCs and Macs will have python already installed.

To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):
<SyntaxHighlighter language="javascript" style={docco}>
C:\Users\Your Name &gt;python --version
    </SyntaxHighlighter>
                   
                      <Contenth2>Python Quickstart</Contenth2>
                      Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.

The way to run a python file is like this on the command line:
<SyntaxHighlighter language="javascript" style={docco}>
C:\Users\Your Name &gt;python helloworld.py
</SyntaxHighlighter>


Where "helloworld.py" is the name of your python file.

Let's write our first Python file, called helloworld.py, which can be done in any text editor.

<SyntaxHighlighter language="javascript" style={docco}>
helloworld.py

print("Hello, World!")
</SyntaxHighlighter>
Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:

<SyntaxHighlighter language="javascript" style={docco}>
C:\Users\Your Name &gt;python helloworld.py
</SyntaxHighlighter>

                      <Contenth2>The Python Command Line</Contenth2>
                      To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file. This is made possible because Python can be run as a command line itself.

Type the following on the Windows, Mac or Linux command line:
<SyntaxHighlighter language="javascript" style={docco}>


C:\Users\Your Name &gt;python
</SyntaxHighlighter>
</Contentp>
        </Content>


        <Content>
        <ProgressBar now={ltr} label={`${ltr}%`} />
        <Contenttitle ref={syntaxSection}>Python Syntax</Contenttitle>
        <Contenth1>Execute Python Syntax</Contenth1>
                  <Contentp>As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:
                    
                  Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:
                  <SyntaxHighlighter language="javascript" style={docco}>

                  &gt; &gt; &gt; print("Hello, World!")
                  Hello, World!
                  </SyntaxHighlighter>
                      <Contenth2>Python Indentation</Contenth2>
                      Indentation refers to the spaces at the beginning of a code line.

Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.

Python uses indentation to indicate a block of code.
  <SyntaxHighlighter language="javascript" style={docco}>

  if 5   &gt; 2:
  print("Five is greater than two!")
                  </SyntaxHighlighter>
                      <Contenth2>Python Variables</Contenth2>
                      In Python, variables are created when you assign a value to it:

                      Python has no command for declaring a variable.

You will learn more about variables in the Python Variables chapter.
</Contentp>
        </Content>

        <Content>
        <ProgressBar now={six} label={`${six}%`} />
        <Contenttitle ref={commentSection}>Python Comments</Contenttitle>
        <Contentp>Comments can be used to explain Python code.

Comments can be used to make the code more readable.

Comments can be used to prevent execution when testing code.</Contentp>
        <Contenth1>Creating a Comment</Contenth1>
                  <Contentp>Comments starts with a #, and Python will ignore them:
        <SyntaxHighlighter language="javascript" style={docco}>

        #This is a comment.
        print("Hello, World!")
                </SyntaxHighlighter>
                  Comments can be placed at the end of a line, and Python will ignore the rest of the line:
                  <SyntaxHighlighter language="python" style={docco}>
                  {codeString1}
                  </SyntaxHighlighter>

                  A comment does not have to be text that explains the code, it can also be used to prevent Python from executing code:
                  <SyntaxHighlighter language="python" style={docco}>
                 {codeString}
                  </SyntaxHighlighter>
                  
                      <Contenth2>Multiline Comments</Contenth2>
                      Python does not really have a syntax for multiline comments.

                    To add a multiline comment you could insert a # for each line:
                    <SyntaxHighlighter language="python" style={docco}>
                    {code}
                    </SyntaxHighlighter>

                    Or, not quite as intended, you can use a multiline string.

                    Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:

                    <SyntaxHighlighter language="python" style={docco}>
                    {codeString2}
                    </SyntaxHighlighter>
                    As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multiline comment.
                     
</Contentp>
        </Content>

        <Content>
        <ProgressBar now={egh} label={`${egh}%`} />
        <Contenttitle ref={varSection}>Python Variables</Contenttitle>
        <Contenth1>Variables</Contenth1>
                  <Contentp>
                  Variables are containers for storing data values.
                    <Contenth2>Creating Variables</Contenth2>
                    Python has no command for declaring a variable.

A variable is created the moment you first assign a value to it.
                    <SyntaxHighlighter language="python" style={docco}>
                    {codeString3}
                    </SyntaxHighlighter>


Variables do not need to be declared with any particular type, and can even change type after they have been set.
                  <SyntaxHighlighter language="python" style={docco}>
                    {codeString4}
                    </SyntaxHighlighter>
                      <Contenth2>Casting</Contenth2>
                      If you want to specify the data type of a variable, this can be done with casting.
                    <SyntaxHighlighter language="python" style={docco}>
                    {codeString5}
                    </SyntaxHighlighter>
                    <ProgressBar now={hun} label={`${hun}%`} />
                  <EditorContainer>
                  <Contenth1>Try it out yourself:</Contenth1>
                    <AceEditor value={codee}
  onChange={(newCode) => setCode(newCode)}
ref={aceEditorRef} mode="python" theme="monokai"
                    style={{ fontFamily: 'Inconsolata', fontSize: 16, width: '100%', height: '400px', enableBasicAutocompletion: true, enableLiveAutocompletion: true, }} />
                  
                  
                   <btnwrap>
                      <NavBtnLink onClick={executeCode}>Execute Code</NavBtnLink>
                      
                      <NavBtnLink onClick={resetCode}>Reset Code</NavBtnLink>
                      <NavBtnLink onClick={shareCode}>Share your code</NavBtnLink>
                      {isDialogOpen && <DialogBox>
                        <h2>Share your code</h2>
                      <p>Copy the link below to share your code:</p>
                      <input type="text" value={codeLink} readOnly />
                    {/* Add your social media logos or buttons here */}
                     </DialogBox>}
                   </btnwrap>
                   <Contenth1>Output: </Contenth1>
                  <Contentp>
                      <pre>{output}</pre>
                  </Contentp>
                   </EditorContainer>

</Contentp>
        </Content>
   

   </>

  
  );
 
 
   
   
}

export default Python;
