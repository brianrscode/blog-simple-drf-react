from django.db import models


class Post(models.Model):
    CATEGORIES = [
        ("Technology", "Technology"),
        ("Lifestyle", "Lifestyle"),
        ("Health", "Health"),
        ("Travel", "Travel"),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=10, choices=CATEGORIES, default="Technology", blank=True, null=True)
    content = models.TextField()

    def __str__(self):
        return self.title