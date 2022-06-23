// https://www.redditstatic.com/desktop2x/EconManagement2.0200a5222cb5ab77f739.js
// Retrieved at 6/23/2022, 5:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconManagement2"], {
		"./src/reddit/controls/SearchBar/index.m.less": function(e, a, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, a, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				t = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Search/index.tsx"),
				o = n("./src/reddit/controls/SearchBar/index.m.less"),
				i = n.n(o);
			a.a = e => t.a.createElement("div", {
				className: Object(c.a)(i.a.searchContainer, e.className)
			}, t.a.createElement("input", {
				className: Object(c.a)(i.a.search, {
					[i.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), t.a.createElement("div", {
				className: Object(c.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, t.a.createElement(s.a, null)))
		},
		"./src/reddit/pages/EconManagement2/index.m.less": function(e, a, n) {
			e.exports = {
				container: "_1rVWHZMJ7WaUUW_ohqHk5F",
				searchBar: "_3_E8ERt-gZkEN9R-vzLd_Y"
			}
		},
		"./src/reddit/pages/EconManagement2/index.tsx": function(e, a, n) {
			"use strict";
			n.r(a);
			var r = n("./node_modules/react/index.js"),
				t = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/economics/econManagement/index.ts"),
				o = n("./src/reddit/controls/SearchBar/index.tsx"),
				i = n("./src/reddit/pages/EconManagement2/index.m.less"),
				d = n.n(i);
			const l = () => {
				const [e, a] = Object(r.useState)(""), n = Object(c.d)();
				return t.a.createElement(o.a, {
					className: d.a.searchBar,
					onKeyPress: a => {
						13 === a.charCode && n(Object(s.d)(e))
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e,
					placeholder: "Username or user id"
				})
			};
			a.default = () => t.a.createElement("div", {
				className: d.a.container
			}, t.a.createElement(l, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement2.0200a5222cb5ab77f739.js.map