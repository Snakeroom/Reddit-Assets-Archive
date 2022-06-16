// https://www.redditstatic.com/desktop2x/NewEconManagement.675574479298b28fd00a.js
// Retrieved at 6/16/2022, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NewEconManagement"], {
		"./src/reddit/controls/SearchBar/index.m.less": function(e, n, a) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, n, a) {
			"use strict";
			var t = a("./node_modules/react/index.js"),
				c = a.n(t),
				r = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/icons/svgs/Search/index.tsx"),
				o = a("./src/reddit/controls/SearchBar/index.m.less"),
				i = a.n(o);
			n.a = e => c.a.createElement("div", {
				className: Object(r.a)(i.a.searchContainer, e.className)
			}, c.a.createElement("input", {
				className: Object(r.a)(i.a.search, {
					[i.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), c.a.createElement("div", {
				className: Object(r.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, c.a.createElement(s.a, null)))
		},
		"./src/reddit/pages/NewEconManagement/index.tsx": function(e, n, a) {
			"use strict";
			a.r(n);
			var t = a("./node_modules/react/index.js"),
				c = a.n(t),
				r = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/reddit/actions/economics/econManagement/index.ts"),
				o = a("./src/reddit/controls/SearchBar/index.tsx");
			const i = () => {
				const [e, n] = Object(t.useState)(""), a = Object(r.d)(), i = () => {
					a(Object(s.d)(e))
				};
				return c.a.createElement(o.a, {
					onSearch: i,
					onKeyPress: e => {
						13 === e.charCode && i()
					},
					onTextChange: e => {
						n(e.currentTarget.value)
					},
					value: e
				})
			};
			n.default = () => c.a.createElement("div", null, c.a.createElement(i, null))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewEconManagement.675574479298b28fd00a.js.map