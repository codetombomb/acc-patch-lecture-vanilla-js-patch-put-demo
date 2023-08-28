# acc-patch-lecture-vanilla-js-patch-put-demo

## PATCH Demo

- Run `json-server` && open `index.html` in the browser
- Using POSTMAN:
    - Update user email (gmail.com)
    - Update career_goal (Become a Full Stack Developer **at Github**), first_name, and email: ("Sara" not "Sarah")


## PUT Demo

- Update just program using PUT (Cyber Security)

## [PATCH with `fetch`](https://docs.google.com/presentation/d/1rC2_BBXa-8qv-qvjj9OXIQPD6iRa_ykErzjrESYYQ9E/edit#slide=id.g278b428ad9b_0_0)

- Uncomment `update-student-form` section
- In `app.js`, add submit event listener for form
- Use `new FormData()` to get form data
- Filter blank entries
- Populate object from filtered form data
- Create function that sends patch
- Update DOM with updated user data
