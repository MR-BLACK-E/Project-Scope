
from django import forms
from .models import Contact

from .models import Student

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message']


# # Registration Form

from django import forms
from .models import Student

class StudentRegistrationForm(forms.ModelForm):
    country = forms.ChoiceField(
        choices=[('INDIA','India'),('CHINA','China'),('UAE','United Arab Emirates')]
    )
    state = forms.ChoiceField(
        choices=[('Kerala','Kerala'),('Tamil Nadu','Tamil Nadu'),('Karnataka','Karnataka')]
    )
    hobbies = forms.MultipleChoiceField(
        choices=[('sports', 'Sports'), ('music', 'Music'), ('reading', 'Reading')],
        widget=forms.CheckboxSelectMultiple
    )
    avatar = forms.FileField()
    course = forms.ChoiceField(
        choices=Student._meta.get_field('course').choices,
        label="Select Course"
    ) 
    
    class Meta:
        model = Student
        fields = '__all__'


class StudentEditForm(forms.ModelForm):
    country = forms.ChoiceField(
        choices=[('INDIA','India'),('CHINA','China'),('UAE','United Arab Emirates')]
    )
    state = forms.ChoiceField(
        choices=[('Kerala','Kerala'),('Tamil Nadu','Tamil Nadu'),('Karnataka','Karnataka')]
    )
    hobbies = forms.MultipleChoiceField(
        choices=[('sports', 'Sports'), ('music', 'Music'), ('reading', 'Reading')],
        widget=forms.CheckboxSelectMultiple
    )
    avatar = forms.FileField()
    
    course = forms.ChoiceField(
        choices=Student._meta.get_field('course').choices,
        label="Select Course"
    )      

    class Meta:
        model = Student
        fields = ['first_name', 'last_name', 'password','gender','dob','country','state','city','hobbies','avatar','course','phone']
