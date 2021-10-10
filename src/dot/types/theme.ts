export interface ExtensionTheme {
    tab_selected?: string;
    accentcolor?: string; // Use 'theme.colors.frame', this alias is ignored in Firefox >= 70.
    frame?: string;
    frame_inactive?: string;
    textcolor?: string; // Use 'theme.colors.tab_background_text', this alias is ignored in Firefox >= 70.
    tab_background_text?: string;
    tab_background_separator?: string;
    tab_loading?: string;
    tab_text?: string;
    tab_line?: string;
    toolbar?: string;
    toolbar_text?: string; // This color property is an alias of 'bookmark_text'.
    bookmark_text?: string;
    toolbar_field?: string;
    toolbar_field_text?: string;
    toolbar_field_border?: string;
    toolbar_field_separator?: string;
    toolbar_top_separator?: string;
    toolbar_bottom_separator?: string;
    toolbar_vertical_separator?: string;
    icons?: string;
    icons_attention?: string;
    button_background_hover?: string;
    button_background_active?: string;
    popup?: string;
    popup_text?: string;
    popup_border?: string;
    toolbar_field_focus?: string;
    toolbar_field_text_focus?: string;
    toolbar_field_border_focus?: string;
    popup_highlight?: string;
    popup_highlight_text?: string;
    ntp_background?: string;
    ntp_text?: string;
    sidebar?: string;
    sidebar_border?: string;
    sidebar_text?: string;
    sidebar_highlight?: string;
    sidebar_highlight_text?: string;
    toolbar_field_highlight?: string;
    toolbar_field_highlight_text?: string;
}
