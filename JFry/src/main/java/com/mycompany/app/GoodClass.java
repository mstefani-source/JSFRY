package com.mycompany.app;

import com.mycompany.app.interfaces.SimpleObject;

class GoodClass implements SimpleObject <String> {

        private String name;
   
        public SimpleObject<String> getInstance(){
            return this;
        };

        GoodClass() {
            super();
            this.name = "mama";
        }

        @Override
        public String toString(){
            return "name " + this.name;
        }
}
