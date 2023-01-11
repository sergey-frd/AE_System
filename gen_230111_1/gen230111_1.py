#!/usr/bin/python
#

#import getopt, fnmatch, string, glob
#import sys
#import re
#import os
#import subprocess
#import csv
#import time
#import shutil

import json
import os
import shutil

def copy_files(src_dir, dest_dir, exclude_dirs):
    for dirpath, dirnames, filenames in os.walk(src_dir):
        print ("==>  dirnames = ",dirnames) 
        for dirname in list(dirnames):
            print ("-->  dirname = ",dirname) 
            for e_dir in exclude_dirs:
                if e_dir in dirname:
                    print ("--- del dirname = ",dirname) 
                    #dirnames.remove(dirname) 
                    break

            print ("+++  dirname = ",dirname) 
            for filename in filenames:
                src_file = os.path.join(dirpath, filename)
                new_dest = os.path.join(dest_dir, os.path.relpath(dirpath,src_dir))
                if not os.path.exists(new_dest):
                    os.makedirs(new_dest)
                dest_file = os.path.join(new_dest, filename)
                shutil.copy2(src_file, dest_file)

if __name__ == '__main__':

    #with open('e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\gen_230111_1\\json_gen_1.json') as f:
    with open('json_gen_1.json') as f:
        data = json.load(f)

    src_dir = data['src_dir']
    dest_dir = data['dest_dir']
    exclude_dirs = data['exclude_dirs']

    print ("src_dir = ",src_dir)  
    print ("dest_dir = ",dest_dir)  
    print ("exclude_dirs = ",exclude_dirs)  
    copy_files(src_dir, dest_dir, exclude_dirs)

