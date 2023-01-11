#!/usr/bin/python


import json
import os
import shutil



def copy_files(src_dir, dest_dir, exclude_strs):
    for dirpath, dirnames, filenames in os.walk(src_dir):
        for dirname in list(dirnames):
            if any(dirname.startswith(exclude) for exclude in exclude_strs):

                print ("--- del dirname = ",dirname) 
                dirnames.remove(dirname)

        for filename in filenames:
            src_file = os.path.join(dirpath, filename)
            new_dest = os.path.join(dest_dir, os.path.relpath(dirpath,src_dir))
            if not os.path.exists(new_dest):
                os.makedirs(new_dest)
            dest_file = os.path.join(new_dest, filename)
            shutil.copy2(src_file, dest_file)

if __name__ == '__main__':

    with open('json_gen_2b.json') as f:
        data = json.load(f)

    src_dir = data['src_dir']
    dest_dir = data['dest_dir']
    exclude_strs = data['exclude_strs']

    print ("src_dir = ",src_dir)  
    print ("dest_dir = ",dest_dir)  
    print ("exclude_strs = ",exclude_strs)

    copy_files(src_dir, dest_dir, exclude_strs)

