const env = process.env;

const config = {
	db: {
		host:  		env.NODE_ENV === "production" ? env.RDS_HOSTNAME : env.DB_HOST,
		user: 		env.NODE_ENV === "production" ? env.RDS_USERNAME : env.DB_USERNAME,
		password: env.NODE_ENV === "production" ? env.RDS_PASSWORD : env.DB_PASSWORD,
		database: env.NODE_ENV === "production" ? env.RDS_DBNAME : env.DB_NAME,
		dialect: 'mysql'
	},
	listPerPage: env.LIST_PER_PAGE || 10
}