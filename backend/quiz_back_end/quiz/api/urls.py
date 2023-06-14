from django.contrib import admin
from django.urls import path
from quiz.api import views

app_name = "api"



urlpatterns = [
    path("quizes/", views.QuizListCreateAV.as_view(), name='quiz-list'),
    path("quizes/<int:pk>", views.QuizDetailAPIView.as_view(), name='quiz-detail'),
    
    path("questions/", views.QuestionListCreateAV.as_view(), name='question-list'),
    path("questions/<int:pk>", views.QuestionDetailAPIView.as_view(), name='question-detail'),

    path("options/", views.OptionListCreateAV.as_view(), name='option-list'),
    path("options/<int:pk>", views.OptionDetailAPIView.as_view(), name='option-detail'),
    
    path("results/", views.ResultListCreateAV.as_view(), name='result-list'),
    path("results/<int:pk>", views.ResultDetailAPIView.as_view(), name='results-detail'),
]