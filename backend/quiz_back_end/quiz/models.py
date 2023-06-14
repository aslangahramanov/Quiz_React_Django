from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Quiz(models.Model):
    title = models.CharField(max_length=100, unique=True)
    question_time = models.IntegerField(default=30, validators=[MinValueValidator(5)])


    def __str__(self):
        return self.title



class Question(models.Model):
    title =  models.TextField(null=False, blank=False)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    
    def __str__(self):
        return self.title
    
    
    
class Option(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')
    answer = models.CharField(max_length=200)
    correct = models.BooleanField(null=False)
    
    def __str__(self):
        return self.answer
    
    
class Result(models.Model):
    full_name = models.CharField(max_length=100)
    quiz_name = models.CharField(max_length=100)
    question_count = models.IntegerField()
    correct_answer = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    wrong_answer = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    
    def __str__(self):
        return self.full_name
    