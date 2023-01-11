
import json
import os
import shutil

def move_files(src, dst, starts_with):
    for dirpath, dirnames, filenames in os.walk(src):
        for dirname in dirnames:
            if dirname.startswith(tuple(starts_with)):
                src_path = os.path.join(dirpath, dirname)
                dst_path = src_path.replace(src, dst, 1)

                print ("move dirname = ",dirname) 
                shutil.move(src_path, dst_path)
        for filename in filenames:
            if any(dirname.startswith(starts) for dirname,_,_ in os.walk(dirpath) for starts in starts_with):
                src_path = os.path.join(dirpath, filename)
                dst_path = src_path.replace(src, dst, 1)
                print ("move src_path = ",src_path) 
                shutil.move(src_path, dst_path)

if __name__ == '__main__':
    with open('json_gen_4.json') as json_file:
        config = json.load(json_file)
    source_dir = config['source_dir']
    dest_dir = config['dest_dir']
    dir_starts_with = config['dir_starts_with']

    print ("source_dir = ",source_dir)  
    print ("dest_dir = ",dest_dir)  
    print ("dir_starts_with = ",dir_starts_with)

    move_files(source_dir, dest_dir, dir_starts_with)

