package io.gdiazs.examples.todo.home.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.gdiazs.examples.todo.home.model.HomeModel;

@Service
public class HomeServiceImpl implements HomeService{


	@Transactional(readOnly = true)
	public HomeModel getHomeModel() {
		HomeModel homeView = new HomeModel();
		homeView.setWelcomeMessage("Bienvenido");
		
		return homeView;
	}

}
