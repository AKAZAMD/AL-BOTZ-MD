{ pkgs }: {
  deps = [
    pkgs.unzip
    pkgs.nodejs
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}