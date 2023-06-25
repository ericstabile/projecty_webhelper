import os
import shutil

destination_directory = 'F:\\Godot 4.0\\ProjectY\\Assets\\JSON\\'

def delete_and_move_files(files_to_delete, files_to_move):
    for file_to_delete, file_to_move in zip(files_to_delete, files_to_move):
        if os.path.isfile(file_to_move):
            # delete the existing file
            if os.path.isfile(file_to_delete):
                os.remove(file_to_delete)
            else:
                print(f"Error: {file_to_delete} is not a valid filename")

            # move the other file
            if os.path.isfile(file_to_move):
                shutil.move(file_to_move, destination_directory)
            else:
                print(f"Error: {file_to_move} is not a valid filename")

            # delete the downloaded file
            if os.path.isfile(file_to_move):
                os.remove(file_to_move)

inventory_files_to_delete = [
    'F:\\Godot 4.0\\ProjectY\\Assets\\JSON\\inventory_object_data_v0.json',
    'F:\\Godot 4.0\\ProjectY\\Assets\\JSON\\modifier_data_v0.json',
    'F:\\Godot 4.0\\ProjectY\\Assets\\JSON\\action_data_v0.json'
]

inventory_files_to_move = [
    'C:\\Users\\essta\\Downloads\\inventory_object_data_v0.json',
    'C:\\Users\\essta\\Downloads\\modifier_data_v0.json',
    'C:\\Users\\essta\\Downloads\\action_data_v0.json'
]

delete_and_move_files(inventory_files_to_delete, inventory_files_to_move)
