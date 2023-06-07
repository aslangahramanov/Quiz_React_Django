# Generated by Django 4.2 on 2023-06-06 15:25

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_report_e_mail_alter_options_answer_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('question_time', models.IntegerField(default=30, validators=[django.core.validators.MinValueValidator(10)])),
            ],
        ),
        migrations.RenameField(
            model_name='questions',
            old_name='question',
            new_name='title',
        ),
        migrations.AlterField(
            model_name='options',
            name='questions',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question', to='quiz.questions'),
        ),
        migrations.AddField(
            model_name='questions',
            name='quiz',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='quiz', to='quiz.quiz'),
            preserve_default=False,
        ),
    ]
