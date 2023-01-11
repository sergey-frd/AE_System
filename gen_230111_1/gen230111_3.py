import json
import os
import shutil

def copy_files(src, dst, starts_with):
    for dirpath, dirnames, filenames in os.walk(src):
        for dirname in dirnames:
            if dirname.startswith(tuple(starts_with)):
                src_path = os.path.join(dirpath, dirname)
                dst_path = src_path.replace(src, dst, 1)
                shutil.copytree(src_path, dst_path)
                print ("copytree dirname = ",dirname) 

        for filename in filenames:
            if any(dirname.startswith(starts) for dirname,_,_ in os.walk(dirpath) for starts in starts_with):
                src_path = os.path.join(dirpath, filename)
                dst_path = src_path.replace(src, dst, 1)
                print ("copy2 filename = ",filename) 
                shutil.copy2(src_path, dst_path)


if __name__ == '__main__':
    with open('json_gen_3.json') as json_file:
        config = json.load(json_file)
    src_dir = config['src_dir']
    dst_dir = config['dest_dir']
    starts_with = config['dir_starts_with']
    copy_files(src_dir, dst_dir, starts_with)

