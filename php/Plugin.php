<?php


namespace calderawp\CalderaPluginBoilerPlate;

use calderawp\CalderaPluginBoilerPlate\Contracts\PluginContract;

final class Plugin implements PluginContract
{

	/**
	 * @return string
	 */
	public function sayHi()
	{
		return 'Hi Roy';
	}
}
