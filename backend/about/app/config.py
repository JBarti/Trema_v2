def dev_config(flask_app):
    config = flask_app.config
    config[
        "SECRET_KEY"
    ] = "toJAuUnXEvIVf4umzK+0me83c8+SgKxp03yinvSmV+QwwgUDahX5PlCwK3HNw6JeM8wRWVjdlaw1efc2HakqBA"
    config["DEBUG"] = True
    config[
        "MONGO_URI"
    ] = "mongodb://josip:barty456@ds121636.mlab.com:21636/heroku_snz76vxg"
    return config


def pro_config(flask_app):
    config = flask_app.config
    config[
        "SECRET_KEY"
    ] = "toJAuUnXEvIVf4umzK+0me83c8+SgKxp03yinvSmV+QwwgUDahX5PlCwK3HNw6JeM8wRWVjdlaw1efc2HakqBA"
    config["DEBUG"] = False
    config[
        "MONGO_URI"
    ] = "mongodb://josip:barty456@ds121636.mlab.com:21636/heroku_snz76vxg"
    return config
