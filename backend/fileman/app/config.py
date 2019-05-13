def dev_config(flask_app):
    config = flask_app.config
    config[
        "SECRET_KEY"
    ] = "toJAuUnXEvIVf4umzK+0me83c8+SgKxp03yinvSmV+QwwgUDahX5PlCwK3HNw6JeM8wRWVjdlaw1efc2HakqBA"
    config["DEBUG"] = True
    config["UPLOAD_FOLDER"] = "./static"
    return config


def pro_config(flask_app):
    config = flask_app.config
    config[
        "SECRET_KEY"
    ] = "toJAuUnXEvIVf4umzK+0me83c8+SgKxp03yinvSmV+QwwgUDahX5PlCwK3HNw6JeM8wRWVjdlaw1efc2HakqBA"
    config["UPLOAD_FOLDER"] = "./static"
    config["DEBUG"] = False
    return config
