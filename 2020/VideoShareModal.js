// https://www.redditstatic.com/desktop2x/VideoShareModal.137d53d0e18ef8f36e0e.js
// Retrieved at 10/28/2020, 4:10:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["VideoShareModal"], {
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(i),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/mapToObject/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				m = s("./src/reddit/controls/RadioInput/index.tsx"),
				x = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = s("./src/reddit/controls/TextButton/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				S = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				g = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModalStyles.m.less"),
				T = s.n(g);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.input("TextBox", T.a), M = d.a.wrapped(p.h, "ModalHeader", T.a), E = d.a.wrapped(_.a, "TextButton", T.a), k = d.a.div("FooterRow", T.a), I = e => "".concat(e < 10 ? "0" : "").concat(e);
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const e = Math.trunc((this.context.currentTime || 0) / 60),
							t = Math.trunc((this.context.currentTime || 0) % 60);
						this.setState({
							minutes: e,
							seconds: t,
							displayMinutes: I(e),
							displaySeconds: I(t),
							useTimestamp: !1
						})
					}, this.onTypeChange = e => {
						this.setState({
							useTimestamp: "true" === e
						})
					}, this.onMinutesInputChange = e => {
						const t = parseInt(e.currentTarget.value) || 0;
						t >= 0 && this.setState({
							minutes: t,
							displayMinutes: 0 === t ? "" : t.toString()
						})
					}, this.onSecondsInputChange = e => {
						const t = parseInt(e.currentTarget.value) || 0;
						t >= 0 && t <= 59 && this.setState({
							seconds: t,
							displaySeconds: 0 === t ? "" : t.toString()
						})
					}, this.onSecondsInputBlur = () => {
						this.setState({
							displaySeconds: I(this.state.seconds)
						})
					}, this.onMinutesInputBlur = () => {
						this.setState({
							displayMinutes: I(this.state.minutes)
						})
					}, this.handleClickCopy = () => {
						this.props.onClose(this.url)
					}, this.handleClickClose = () => {
						this.props.onClose()
					}, this.state = {
						minutes: 0,
						seconds: 0,
						displayMinutes: "00",
						displaySeconds: "00",
						useTimestamp: !1
					}
				}
				get baseUrl() {
					const {
						protocol: e,
						host: t,
						pathname: s
					} = o.a.parse(this.props.url);
					return "".concat(e, "//").concat(t).concat(s)
				}
				get timestamp() {
					return 60 * this.state.minutes + this.state.seconds || 0
				}
				get displayUrl() {
					return this.state.useTimestamp ? Object(l.a)(this.baseUrl, {
						ts: this.timestamp
					}) : this.baseUrl
				}
				get url() {
					return this.state.useTimestamp ? Object(l.a)(this.baseUrl, Object.assign({
						ts: this.timestamp
					}, Object(u.a)(Object(c.a)(this.props.url)))) : this.props.url
				}
				render() {
					return a.a.createElement(p.d, null, a.a.createElement(M, null, a.a.createElement(S.a, null, a.a.createElement(p.p, null, b._("Share", null, {
						hk: "1jIG3I"
					})), a.a.createElement(E, {
						onClick: this.handleClickClose
					}, a.a.createElement(p.b, null)))), a.a.createElement(p.k, null, a.a.createElement(C.a, null, a.a.createElement(y, {
						disabled: !0,
						value: this.displayUrl
					}), a.a.createElement(E, {
						onClick: this.handleClickCopy
					}, b._("Copy", null, {
						hk: "2bETeK"
					})))), a.a.createElement(k, null, a.a.createElement(m.a, {
						name: "share-link",
						onChange: this.onTypeChange,
						value: String(this.state.useTimestamp)
					}, a.a.createElement(x.a, {
						showButton: !0,
						value: "false",
						className: T.a.radioOption
					}, this.context.isLive ? a.a.createElement(a.a.Fragment, null, b._("Share", null, {
						hk: "3LcrOx"
					}), a.a.createElement("span", {
						className: T.a.LiveIndicator
					}, b._("Live", null, {
						hk: "2a1foH"
					}))) : b._("Share from beginning", null, {
						hk: "4rKJB"
					})), a.a.createElement(x.a, {
						showButton: !0,
						value: "true",
						className: T.a.radioOption
					}, b._("Start from", null, {
						hk: "4lQjLy"
					}), a.a.createElement("div", {
						className: T.a.timeInputWrapper
					}, a.a.createElement("input", {
						className: T.a.minutesTimeInput,
						onChange: this.onMinutesInputChange,
						onBlur: this.onMinutesInputBlur,
						type: "text",
						maxLength: 4,
						size: 4,
						value: this.state.displayMinutes,
						placeholder: "00"
					}), ":", a.a.createElement("input", {
						className: T.a.secondsTimeInput,
						onChange: this.onSecondsInputChange,
						onBlur: this.onSecondsInputBlur,
						type: "text",
						maxLength: 2,
						size: 2,
						value: this.state.displaySeconds,
						placeholder: "00"
					}))))))
				}
			}
			v.contextType = h.a, t.default = Object(r.a)(v)
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModalStyles.m.less": function(e, t, s) {
			e.exports = {
				TextBox: "NQTi34lXQj3KQwNahM55V",
				textBox: "NQTi34lXQj3KQwNahM55V",
				ModalHeader: "_2nMk_ghAxbCRYxB673TguC",
				modalHeader: "_2nMk_ghAxbCRYxB673TguC",
				TextButton: "qG6sJYgtP-NJ29PHNvf7k",
				textButton: "qG6sJYgtP-NJ29PHNvf7k",
				FooterRow: "_1eio1wCjLYTQcEi05o3Nt-",
				footerRow: "_1eio1wCjLYTQcEi05o3Nt-",
				radioOption: "_3dl19ZqUXki6QvqmOh1Od7",
				radioOn: "_2EUcT-MveSjYAKOpXq5X7g",
				minutesTimeInput: "_2b4MwgRgq8UqepSf5zPM7p",
				timeInput: "_35_c2zmPhyUU9disN4msAN",
				secondsTimeInput: "_3MBOUkWBSmuK-HtMm_cDz7",
				live: "_3YjdC0kYvOBZi7rFcz5Zpf",
				timeInputWrapper: "_3KqE5xyPLta2yz3DVzHmar",
				LiveIndicator: "_1-4ATicuH9HimcelLHQTnG",
				liveIndicator: "_1-4ATicuH9HimcelLHQTnG"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/VideoShareModal.137d53d0e18ef8f36e0e.js.map