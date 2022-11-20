module.exports = {
  async up(db, client) {
    await db.collection('staff').insertOne({"type":"cooks","monday":["John","William","James","Charles"],"tuesday":["George","Frank","Joseph"],"wednesday":["Thomas","Henry","Robert","Edward","Harry","Walter"],"thursday":["Albert","Samuel","David","Louis","Joe","Charlie"],"friday":["Clarence","Richard","Andrew","Daniel","Ernest"]});
    await db.collection('staff').insertOne({"type":"waiters","monday":["Will","Jesse","Oscar","Lewis"],"tuesday":["Peter","Benjamin","Frederick","Willie","Alfred","Sam"],"wednesday":["Roy","Herbert","Jacob","Tom","Elmer","Carl","Lee"],"thursday":["Howard","Martin","Michael","Bert"],"friday":["Herman","Jim","Francis","Harvey","Earl","Eugene","Ralph","Ed"]});
  },

  async down(db, client) {
    await db.collection('staff').drop();
  }
};
