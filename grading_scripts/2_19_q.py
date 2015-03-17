answer1 = widget_inputs["check1"]
answer2 = widget_inputs["check2"]
answer3 = widget_inputs["check3"]
answer4 = widget_inputs["check4"]

is_correct = False

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if answer1 == True:
    is_correct = True
else:
    is_correct = is_correct and False
    commentizer("Check the first answer. If the images have the same resolution with different file sizes, then compression might be correct.")

if answer2 == False:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the second answer. Are the images the same size on the page? If so, the display resolutions are the same.")

if answer3 == False:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the third answer. Do the original images have the same resolutions? Open up DevTools to find out.")

if answer4 == False:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the fourth answer. Are the file types different? Open up DevTools to find out.")

if is_correct:
    commentizer("Nice job! Don't forget to compress your images!")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct