@ ECHO OFF
set STARTTIME=%TIME%
echo          ---------------
echo Start    : %STARTTIME% %0
echo          ---------------

: -------------------------------------------------

rem echo %PATH%
rem PATH='C:\Users\serge\AppData\Local\Programs\Python\Python39';'C:\Users\serge\AppData\Local\Programs\Python\Python39\Scripts';%PATH%
rem PATH='C:\Users\serge\AppData\Local\Programs\Python\Python39\Scripts';%PATH%
rem  echo %PATH%

IF EXIST C:\Users\serge\AppData\Local\Programs\Python\Python39\python.exe (
    SET PYTHON_PATH=C:\Users\serge\AppData\Local\Programs\Python\Python39\python.exe
)


ECHO  "Call=%PYTHON_PATH% "
e:
cd e:\Git\P_h_o_t_o\AE_JSX\AE_System\gen_230111_1
rem %PYTHON_PATH% e:\Git\P_h_o_t_o\AE_JSX\AE_System\gen_230111_1\gen230111_4.py
%PYTHON_PATH% e:\Git\P_h_o_t_o\AE_JSX\AE_System\gen_230111_1\gen230111_2.py



