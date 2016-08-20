DIM objshell
set objshell = createobject("wscript.shell")
iReturn = objshell.run( "cmd /c node D:\gitchunk\signin_tasks\output\vote_for_saber_hbooker.js", 0, TRUE)
 