import math
import sys
import os
import time
# YOU NEED TO CHANGE THIS
numpag=raw_input('\n O Great One, how many pages dost thou desire? \n ----------> ')
print('It shall be done.')
time.sleep(1)
for i in range(1,int(numpag)+1):
    conponame='dvips -Ppdf -E -p'+str(i)+' -l'+str(i)+' -o FiguresLabels/HTML_figs'+str(i)+'.eps FiguresHTML.dvi'
    print conponame
    #shell(conponame)
    os.system(conponame)
