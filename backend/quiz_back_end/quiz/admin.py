from django.contrib import admin
from .models import Question, Option, Result, Quiz

# Register your models here.


class OptionInline(admin.TabularInline):
    model = Option
    extra = 1

admin.site.register(Quiz)
admin.site.register(Result)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    inlines = [OptionInline]
