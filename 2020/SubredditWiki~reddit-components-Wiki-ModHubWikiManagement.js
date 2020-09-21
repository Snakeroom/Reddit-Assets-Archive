// https://www.redditstatic.com/desktop2x/SubredditWiki~reddit-components-Wiki-ModHubWikiManagement.787c0e274237200ce6cc.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"], {
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, i) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				a = i("./node_modules/react-autosize-textarea/lib/index.js"),
				o = i.n(a),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				d = i.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var i = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (i[n[s]] = e[n[s]])
				}
				return i
			};
			const u = e => {
					let {
						className: t,
						children: i,
						editorWrapperRef: n,
						initialHeight: a
					} = e;
					return s.a.createElement("div", {
						className: Object(r.a)(d.a.editorWrapper, t),
						style: a ? {
							height: a
						} : void 0,
						ref: n
					}, i)
				},
				h = e => {
					var {
						isFullHeight: t,
						textAreaRef: i
					} = e, n = m(e, ["isFullHeight", "textAreaRef"]);
					return s.a.createElement(o.a, l({
						className: Object(r.a)(d.a.textareaAutosize, {
							[d.a.mIsFullHeight]: t
						}),
						innerRef: i
					}, n))
				};
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const e = this.props,
						{
							className: t,
							initialHeight: i,
							innerRef: n,
							onEditorResize: a
						} = e,
						o = m(e, ["className", "initialHeight", "innerRef", "onEditorResize"]),
						{
							isResized: r
						} = this.state;
					return s.a.createElement(u, {
						className: t,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: i
					}, s.a.createElement(h, l({}, o, {
						children: !0,
						isFullHeight: !!r,
						textAreaRef: n
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, i) {
			e.exports = {
				container: "ce8AyHVPoXK2ammlk4dfU",
				mModHub: "lPFQHGq7ZJKxOjbVRcUdL",
				content: "_1VN7jDMwPO-3f4G4d4Uy64",
				pageTitle: "V22-y0iI914ak74zxkV1a",
				pageTitleText: "_3BCuy1seZbIJ-Vw-iWJCTG",
				compareBar: "sT-SyQpGKrzgwl4yACquP",
				compareButton: "_1Mw_9r88mDyglkMA5Pp5Ms",
				table: "_2Lg_uTkZH6amYWXVr49IWM",
				colHeaderCheckbox: "_3qPtBJYDKp7pfTfAUKAzlI",
				colHeaderTime: "_3pBaYFkqpMeop0hSx3HG-b",
				colHeaderPage: "_1n5DuAwDmS92cPgdXSZ0VO",
				colHeaderUser: "_1hHgxs8vZyaUp-aaXVfveR",
				colHeaderReason: "_2eOOtPq7Dwb8YjxxasuXgN",
				colHeaderActions: "_2KyULn42zdubuWRRe3ofMX",
				row: "_1n6bCdFzFTcMb8nbcUVbiz",
				mHidden: "_3MGUJlnTJODLOgfuo6ps3N",
				revertButton: "r_5uSGcfTRKw2BrjrMAR6",
				cellPage: "RApPXNo2Wc734CFMKUP9W",
				wikiPageLink: "_3CiqT117augUjPWWrx2TW0",
				usernameLink: "RxzK_7t17mU6YV5lKPTX-",
				cellReason: "_181zFMPLOrQCybR7mpAjDS",
				reasonTextWrapper: "_2k1ikYAtkuItWLnM2v1FoJ",
				mExpanded: "_2Ek11A--oU1fiuOX4icZFo",
				reasonText: "_3rkoZiwX9xBWbnUj8KdDg_",
				moreButton: "MlwbIZHA-n0l6pJotytjr",
				buttons: "_2NPnlVPBDNk-5rZwESZ9B9",
				viewButton: "_1QQV3g6raY4DMIZmGWf_EB",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return $
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				a = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/actions/modal.ts"),
				l = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				m = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				u = i("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				h = i("./src/reddit/components/TrackingHelper/index.tsx"),
				p = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				b = i("./src/reddit/controls/Button/index.tsx"),
				k = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = i("./src/lib/addQueryParams/index.ts"),
				f = i("./src/reddit/constants/parameters.ts"),
				x = i("./src/reddit/helpers/wiki/wikiRevision.ts");

			function v(e, t) {
				const {
					revision: i,
					revisionToCompare: n
				} = t;
				if (!i && !n) return e;
				const s = {};
				return i && (s[f.x] = Object(x.b)(i)), n && (s[f.y] = Object(x.b)(n)), Object(g.a)(e, s)
			}
			var w = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				_ = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				N = i("./src/reddit/selectors/activeModalId.ts"),
				E = i("./src/reddit/selectors/moderatorPermissions.ts"),
				P = i("./src/reddit/selectors/subreddit.ts"),
				C = i("./src/reddit/selectors/subredditWiki.ts"),
				R = i("./node_modules/lodash/times.js"),
				j = i.n(R),
				O = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				T = i("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				W = i.n(T);
			var y = () => {
					const e = s.createElement("div", {
						className: Object(c.a)(W.a.loadingShimmer, Object(O.b)({
							isLoading: !0
						}))
					});
					return s.createElement("div", null, j()(4, t => s.createElement("div", {
						key: t,
						className: W.a.loadingRow
					}, e)))
				},
				M = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.isIntersecting = !1, this.handleChange = e => {
						this.isIntersecting = e.isIntersecting, this.triggerLoadMoreIfNeeded()
					}, this.triggerLoadMoreIfNeeded = () => {
						const {
							isLoading: e,
							hasError: t
						} = this.props;
						!this.isIntersecting || e || t || this.props.onLoadMore()
					}
				}
				componentDidMount() {
					this.triggerLoadMoreIfNeeded()
				}
				componentDidUpdate() {
					this.triggerLoadMoreIfNeeded()
				}
				render() {
					return a.a.createElement(M.a, {
						onChange: this.handleChange
					}, a.a.createElement("div", null))
				}
			}
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var H = i("./node_modules/lodash/noop.js"),
				I = i.n(H),
				S = i("./src/reddit/components/AuthorLink/index.tsx"),
				A = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				B = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				U = i("./src/reddit/controls/Checkbox/index.tsx"),
				D = i("./src/reddit/controls/InternalLink/index.tsx"),
				z = i("./node_modules/lodash/forEach.js"),
				F = i.n(z),
				V = i("./src/lib/fastdom/index.ts");

			function G(e) {
				V.a.read(() => {
					F()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								i = e.parentElement,
								n = "true" === i.dataset.textOverflow;
							t !== n && V.a.write(() => {
								i.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const K = Object(r.c)({
				revision: C.n
			});
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = a.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: i
						} = this.props, n = e.isHidden;
						this.props.sendEvent(Object(k.l)(n)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: i,
							wikiPageName: e.page.name
						}), this.setState({
							isHideRequestPending: !1
						})
					}, this.onRevertClick = () => {
						this.props.onRevertClick(this.props.revision)
					}, this.onShowMoreButtonClick = () => {
						this.setState({
							expanded: !0
						})
					}, this.onCheckboxToggle = () => {
						this.props.onCheckboxToggle(this.props.revisionId)
					}, this.onViewClick = () => {
						this.props.sendEvent(k.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && G([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: i,
						isRecentRevisionMode: s,
						revision: o,
						subredditName: r
					} = this.props, d = o.page.name, l = o.isHidden, {
						expanded: m
					} = this.state, u = o.authorInfo && o.authorInfo.name, h = Object(_.a)({
						subredditName: r,
						wikiPageName: d
					}, i), p = v(h, {
						revision: o.id
					}), k = !s && e, g = d.split("/").slice(-1)[0];
					return a.a.createElement("tr", {
						className: Object(c.a)(W.a.row, l ? W.a.mHidden : null)
					}, !s && a.a.createElement("td", {
						className: W.a.cellCheckbox
					}, a.a.createElement(U.a, {
						className: W.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), a.a.createElement("td", {
						className: W.a.cellTime
					}, Object(B.b)(o)), s && a.a.createElement("td", {
						className: W.a.cellPage
					}, a.a.createElement(D.a, {
						className: W.a.wikiPageLink,
						title: "/".concat(d),
						to: h
					}, g)), a.a.createElement("td", {
						className: W.a.cellUser
					}, u && a.a.createElement(A.a, {
						sendHoverCardEvent: I.a,
						tooltipId: "revision-".concat(o.id),
						user: u
					}, a.a.createElement(S.a, {
						author: u,
						className: W.a.usernameLink
					}, u))), a.a.createElement("td", {
						className: W.a.cellReason
					}, a.a.createElement("div", {
						className: Object(c.a)(W.a.reasonTextWrapper, m ? W.a.mExpanded : null)
					}, a.a.createElement("div", {
						ref: this.reasonElementRef,
						className: W.a.reasonText
					}, o.reason), !m && a.a.createElement(b.d, {
						className: W.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, n.fbt._("more", null, {
						hk: "2IGYPS"
					})))), a.a.createElement("td", null, a.a.createElement("div", {
						className: W.a.buttons
					}, a.a.createElement(b.o, {
						className: W.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, n.fbt._("View", null, {
						hk: "4imNnh"
					})), k && a.a.createElement(a.a.Fragment, null, a.a.createElement(b.n, {
						className: W.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? n.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : n.fbt._("Hide", null, {
						hk: "30nwHP"
					})), a.a.createElement(b.n, {
						className: W.a.revertButton,
						onClick: this.onRevertClick
					}, n.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var J = Object(o.b)(K, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Y = Object(r.c)({
				hasError: C.o,
				hasWikiModPerms: (e, t) => {
					const i = Object(P.B)(e, t);
					return !!i && Object(E.f)(e, {
						subredditId: i.id
					})
				},
				isPending: C.q,
				isRevertConfirmationModalOpen: Object(N.b)("wiki-revert-confirmation"),
				listingInfo: C.p
			});
			class X extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = a.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(k.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(k.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							G(e.getElementsByClassName(W.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, i = t && t.ids || [];
						this.setState(t => {
							let n = t.selectedRevisions;
							return 2 === (n = n.includes(e) ? n.filter(t => t !== e) : n.length < 2 ? [...n, e] : [e]).length && i.indexOf(n[0]) < i.indexOf(n[1]) && n.reverse(), {
								selectedRevisions: n
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: i,
							subredditName: n
						} = this.props, {
							selectedRevisions: s
						} = this.state;
						return a.a.createElement(J, {
							key: e,
							hasWikiModPerms: i,
							isCheckboxSelected: s.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: n
						})
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						hasError: e,
						hasWikiModPerms: t,
						isModHub: i,
						isPending: s,
						isRecentRevisionsMode: o,
						isRevertConfirmationModalOpen: r,
						listingInfo: d,
						subredditName: l,
						wikiPageName: h
					} = this.props, {
						selectedRevisions: k
					} = this.state, g = d && d.ids || [], f = d && d.pageInfo.hasNextPage;
					let x = "",
						w = "#";
					h && (x = Object(_.a)({
						subredditName: l,
						wikiPageName: h
					}, i), 2 === k.length && (w = v(x, {
						revision: k[0],
						revisionToCompare: k[1]
					})));
					const N = !o && t;
					return a.a.createElement("div", {
						ref: this.containerRef,
						className: Object(c.a)(W.a.container, {
							[W.a.mModHub]: i,
							[W.a.mShowActionButtons]: N
						})
					}, a.a.createElement(p.a, {
						buttonText: o ? void 0 : n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: x,
						className: W.a.pageTitle,
						title: a.a.createElement("span", {
							className: W.a.pageTitleText
						}, o ? n.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : n.fbt._("Page history for {pageName}", [n.fbt._param("pageName", "/".concat(h))], {
							hk: "y2LqH"
						}))
					}), a.a.createElement("div", {
						className: W.a.content
					}, !o && a.a.createElement("div", {
						className: W.a.compareBar
					}, a.a.createElement(b.o, {
						className: W.a.compareButton,
						disabled: k.length < 2,
						onClick: this.onCompareClick,
						to: w
					}, n.fbt._("Compare", null, {
						hk: "3grtKa"
					})), n.fbt._("{selectedCnt}/2 selected to compare", [n.fbt._param("selectedCnt", k.length.toString())], {
						hk: "1PfMOM"
					})), a.a.createElement("table", {
						className: W.a.table
					}, a.a.createElement("thead", null, a.a.createElement("tr", null, !o && a.a.createElement("th", {
						className: W.a.colHeaderCheckbox
					}), a.a.createElement("th", {
						className: W.a.colHeaderTime
					}, n.fbt._("time", null, {
						hk: "231ZTq"
					})), o && a.a.createElement("th", {
						className: W.a.colHeaderPage
					}, n.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), a.a.createElement("th", {
						className: W.a.colHeaderUser
					}, n.fbt._("Username", null, {
						hk: "3dJxeH"
					})), a.a.createElement("th", {
						className: W.a.colHeaderReason
					}, n.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), a.a.createElement("th", {
						className: W.a.colHeaderActions
					}, N && a.a.createElement(a.a.Fragment, null, n.fbt._("Actions", null, {
						hk: "1V50p1"
					}), a.a.createElement(u.a, null, n.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), a.a.createElement("br", null), n.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), a.a.createElement("br", null), n.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), a.a.createElement("tbody", {
						className: W.a.tableBody
					}, g.map(this.renderRowItem))), s && a.a.createElement(y, null), f && a.a.createElement(L, {
						hasError: e,
						isLoading: s,
						onLoadMore: this.onLoadMore
					})), r && a.a.createElement(m.a, {
						actionText: n.fbt._("Revert", null, {
							hk: "qQOSa"
						}),
						headerText: n.fbt._("Revert wiki page", null, {
							hk: "2ZNWTL"
						}),
						modalText: n.fbt._("Are you sure you wish to change this wiki page to a previously saved version?", null, {
							hk: "4yhcAG"
						}),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(o.b)(Y, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(d.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)(Object.assign(Object.assign({}, t), {
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				})))
			}))(Object(h.c)(X));

			function $(e) {
				const t = !!e.isRecentRevisionsMode,
					i = Object(w.a)(Object.assign(Object.assign({}, e), {
						isRecent: t
					}));
				return a.a.createElement(Q, Z({
					key: i,
					listingKey: i
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				a = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/TrackingHelper/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				m = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				u = i("./src/reddit/constants/componentSizes.ts"),
				h = i("./src/reddit/constants/wiki.ts"),
				p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				b = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				k = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				g = i("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = i("./src/reddit/selectors/subredditWiki.ts"),
				v = i("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				_ = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				N = i("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				E = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				P = i("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				C = i.n(P);
			const R = e => {
				const {
					item: t,
					subredditName: i,
					isModHub: n
				} = e, a = t.isPagePresent && Object(E.a)({
					subredditName: i,
					wikiPageName: t.path
				}, n);
				return s.createElement("li", null, a ? s.createElement(_.a, {
					className: C.a.link,
					to: a
				}, t.name) : s.createElement("span", null, t.name), !!t.children.length && s.createElement("ul", null, t.children.map(e => s.createElement(R, {
					isModHub: n,
					item: e,
					key: e.path,
					subredditName: i
				}))))
			};
			var j = e => {
					const {
						isModHub: t,
						subredditName: i,
						wikiDirectory: a
					} = e, o = Object(N.a)(a.pageTree || []);
					return s.createElement("div", {
						className: C.a.container
					}, s.createElement("h1", null, n.fbt._("Viewing pages for {subredditName}", [n.fbt._param("subredditName", i)], {
						hk: "1f0dHX"
					})), s.createElement("h2", null, n.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), s.createElement("ul", null, o.map(e => s.createElement(R, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: i
					}))))
				},
				O = i("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				T = i.n(O);
			const {
				fbt: W
			} = i("./node_modules/fbt/lib/FbtPublic.js");

			function y(e) {
				const {
					className: t,
					isModHub: i,
					showRevisionInfo: n,
					subredditName: s,
					wikiDirectory: o,
					wikiPage: r,
					wikiPageName: d
				} = e;
				let l = null;
				return o && d === h.j ? l = a.a.createElement(j, {
					isModHub: i,
					subredditName: s,
					wikiDirectory: o
				}) : r && r.content && d === h.h ? l = a.a.createElement("div", {
					className: T.a.automodContent
				}, r.content.markdown) : r && r.content && (l = a.a.createElement(v.a, {
					className: T.a.wikiHtmlContent,
					html: r.content.html
				})), a.a.createElement("div", {
					className: Object(c.a)(t, T.a.container)
				}, d === h.h && a.a.createElement("div", {
					className: T.a.automodInfoBanner
				}, W._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [W._param("=full documentation", a.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, W._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, n && r && r.revision && a.a.createElement("div", {
					className: T.a.revisionInfo
				}, a.a.createElement(w.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: r.revision
				})))
			}
			var M = i("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				L = i.n(M);
			const H = Object(o.b)(() => Object(r.c)({
					pending: x.a,
					wikiDirectory: x.b,
					wikiPage: x.c
				})),
				I = Object(p.t)();
			class S extends s.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(b.f)())
					}, this.isListingPage = () => this.props.wikiPageName === h.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						i = this.props.wikiPage !== e.wikiPage;
					(t || i) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = u.f + 10;
						this.props.isModHub && (e += u.j + u.k);
						const i = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, i)
					}
				}
				getWikiPageStatus() {
					const {
						wikiDirectory: e,
						wikiPage: t
					} = this.props;
					return this.isListingPage() ? e && e.status : t && t.status
				}
				renderPageContents() {
					const {
						isModHub: e = !1,
						pending: t,
						showRevisionInfo: i,
						subredditName: a,
						wikiDirectory: o,
						wikiPage: r,
						wikiPageName: c
					} = this.props, d = this.getWikiPageStatus(), u = c === h.i, p = this.props.isModHub ? "/r/".concat(this.props.subredditName, "/about/wiki") : "/r/".concat(this.props.subredditName, "/wiki"), b = "".concat(p, "/index"), x = u ? void 0 : n.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !d) return s.createElement(m.a, {
						showTitle: !0
					});
					if (d === f.b.Unknown || d === f.b.PageNotCreated) {
						if (Object(k.b)(c)) return s.createElement(l.a, {
							buttonLink: b,
							buttonText: x,
							description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", c)], {
								hk: "33IIrL"
							})
						})
					}
					switch (d) {
						case f.b.Valid:
							return !(!r || !r.content || r.content.markdown) ? s.createElement(l.a, {
								buttonLink: "".concat(p, "/edit/").concat(c),
								buttonText: n.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: n.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: n.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : s.createElement(y, {
								isModHub: e,
								showRevisionInfo: i,
								subredditName: a,
								wikiDirectory: o,
								wikiPage: r,
								wikiPageName: c
							});
						case f.b.PageNotCreated:
							return s.createElement(l.a, {
								buttonLink: "".concat(p, "/create/").concat(c),
								buttonText: n.fbt._("Create page", null, {
									hk: "2JH7OE"
								}),
								description: n.fbt._("Create a wiki page from this URL", null, {
									hk: "NY4dz"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", c)], {
									hk: "33IIrL"
								})
							});
						case f.b.Unknown:
							return s.createElement(l.a, {
								buttonText: n.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: n.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case f.b.RestrictedPage:
							return s.createElement(l.a, {
								buttonLink: b,
								buttonText: x,
								description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", c)], {
									hk: "33IIrL"
								})
							});
						case f.b.MayNotView:
							return s.createElement(l.a, {
								buttonLink: b,
								buttonText: x,
								description: n.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: s.createElement(g.a, {
									className: L.a.hideIcon
								}),
								title: n.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case f.b.WikiDisabled:
							return s.createElement(l.a, {
								buttonLink: "/r/".concat(a, "/"),
								buttonText: n.fbt._("Continue to r/{subredditName}", [n.fbt._param("subredditName", a)], {
									hk: "1oJQF7"
								}),
								description: n.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: s.createElement(g.a, {
									className: L.a.hideIcon
								}),
								title: n.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case f.b.PageNotFound:
							return s.createElement(l.a, {
								buttonLink: b,
								buttonText: x,
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", c)], {
									hk: "4o8Kt8"
								})
							});
						default:
							return null
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return s.createElement("div", {
						className: Object(c.a)(e, L.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = I(H(Object(d.c)(S)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_38GE9wiaoDeBwytESxgurW",
				mModHub: "FOp_mrprAjmysKAwsxZhy",
				content: "_1FDDEmz6LhrlUvB4ha670Y",
				pageTitle: "_1M_2BWIe9pJyTSD3ZNzB2C",
				loadingPlaceholder: "_2eJGN5qzU3dzM10INVODCG",
				loadingSection: "_97ug2ZsHOzZBsGZ98Mqwl",
				diffWrapper: "_1EwbfNO_skwriCJJeOOslG"
			}
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				d = i("./src/reddit/constants/wiki.ts"),
				l = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				m = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				u = i("./src/reddit/selectors/subredditWiki.ts"),
				h = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				p = i("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				b = i.n(p);
			var k = () => s.createElement("div", {
				className: b.a.loadingPlaceholder
			}, s.createElement("div", {
				className: b.a.loadingSection
			}, s.createElement(h.a, {
				paragraphsCount: 1
			})), s.createElement("div", {
				className: b.a.loadingSection
			}, s.createElement(h.a, {
				paragraphsCount: 1
			})));
			const g = Object(o.c)({
					diffInfo: (e, t) => {
						const i = Object(l.a)(t);
						return Object(u.i)(e, {
							key: i
						})
					}
				}),
				f = Object(a.b)(g);
			class x extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: i,
						diffInfo: a,
						wikiPageName: o
					} = this.props;
					let l = null;
					l = !a || a.pending ? s.createElement(k, null) : a.error ? n.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : s.createElement("div", {
						className: b.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: a.htmlDiff || ""
						}
					});
					const u = Object(m.a)({
						subredditName: i,
						wikiPageName: o,
						wikiSubRoute: d.m.Revisions
					}, t);
					return s.createElement("div", {
						className: Object(r.a)(e, b.a.container, t ? b.a.mModHub : null)
					}, s.createElement(c.a, {
						buttonText: n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: u,
						className: b.a.pageTitle,
						title: n.fbt._("Comparing revisions for /{pageName}", [n.fbt._param("pageName", o)], {
							hk: "DGV1Y"
						})
					}), s.createElement("div", {
						className: b.a.content
					}, l))
				}
			}
			t.a = f(x)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_1pXEnZ4uzz3OUpnXwRJCtz",
				modalHeader: "_3K-huH_Qa4D32ZPqAH9Ky",
				contentBlock: "N3HQ_fD9TZ7_Mk0iUMrkY",
				labelText: "_12y9PvK2L1LCL-P6PdoQ_B",
				reasonInput: "_3ZAhhe9gmKBwxW31xEmhKG",
				details: "_28OX1xAAmItegIE7yXUOxo",
				modalFooter: "NGYee0xeXDoBFshm7Ad-A",
				loadingIcon: "_2dRNmLURJShL28WViqaeCk"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, i) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				a = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/actions/modal.ts"),
				l = i("./node_modules/react-router-redux/es/index.js"),
				m = i("./src/lib/makeActionCreator/index.ts"),
				u = i("./src/reddit/actions/pages/subredditWiki/index.ts"),
				h = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/reddit/constants/wiki.ts"),
				b = i("./src/lib/constants/index.ts"),
				k = i("./src/lib/makeApiRequest/index.ts"),
				g = i("./src/lib/omitHeaders/index.ts"),
				f = i("./src/reddit/constants/headers.ts");
			var x = e => Object(k.a)(Object(g.a)(e.context, [f.a]), {
					endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/edit"),
					method: b.db.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				v = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				w = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				_ = i("./src/reddit/models/Toast/index.ts"),
				N = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				E = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const P = Object(m.a)(E.a);
			var C = i("./src/reddit/components/BlockNavigation/index.tsx"),
				R = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = i("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				O = i("./src/reddit/components/TrackingHelper/index.tsx"),
				T = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				W = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				y = i("./src/reddit/controls/Button/index.tsx"),
				M = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				L = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				H = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				I = i("./src/reddit/selectors/activeModalId.ts"),
				S = i("./src/reddit/selectors/platform.ts"),
				A = i("./src/reddit/selectors/subredditWiki.ts"),
				B = i("./src/higherOrderComponents/asModal/index.tsx"),
				U = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = i("./src/reddit/controls/TextButton/index.tsx"),
				F = i("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				V = i.n(F);
			class G extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						text: ""
					}, this.onSaveButtonClick = async () => {
						const {
							text: e
						} = this.state;
						this.props.onSave(e)
					}, this.onTextChange = e => {
						this.setState({
							text: e.target.value
						})
					}
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						text: t
					} = this.state, i = p.g - t.length;
					return a.a.createElement("div", {
						className: V.a.container
					}, a.a.createElement(U.h, {
						className: V.a.modalHeader
					}, a.a.createElement(U.p, null, n.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), a.a.createElement(z.a, {
						onClick: this.props.onCancel
					}, a.a.createElement(U.b, null))), a.a.createElement("div", {
						className: V.a.contentBlock
					}, a.a.createElement("label", null, a.a.createElement("span", {
						className: V.a.labelText
					}, n.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), a.a.createElement("input", {
						autoFocus: !0,
						className: V.a.reasonInput,
						maxLength: p.g,
						onChange: this.onTextChange,
						placeholder: n.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), a.a.createElement("div", {
						className: V.a.details
					}, n.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [n.fbt._plural(i, "number")], {
						hk: "1Ra9c8"
					}))), a.a.createElement(U.f, {
						className: V.a.modalFooter
					}, a.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(y.f, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? a.a.createElement(D.a, {
						className: V.a.loadingIcon,
						sizePx: 10
					}) : n.fbt._("Save", null, {
						hk: "1zNlod"
					}))))
				}
			}
			var K = Object(B.a)(G),
				q = i("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				J = i.n(q);
			const Z = "Discard-wiki-page-changes",
				Y = "Add-wiki-revision-reason",
				X = 2,
				Q = (e, t, i) => {
					const s = t.status,
						a = {
							[L.a.InvalidPageName]: n.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[L.a.MaxLengthExceed]: n.fbt._("Page name must be shorter than {maxPageLen} characters", [n.fbt._param("maxPageLen", "".concat(p.d))], {
								hk: "11HwWR"
							}),
							[L.a.PageAlreadyExists]: n.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[L.a.RestrictedPageName]: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (s === H.b.Valid) return a[L.a.PageAlreadyExists];
						if (s === H.b.PageNotFound) return n.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (i) return a[i]
					} else if (s === H.b.Valid && !t.isRevisable) return n.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				$ = Object(r.c)({
					allowNavigationCallback: S.a,
					isRevisionReasonModalOpen: Object(I.b)(Y),
					isSaveBeforeLeaveModalOpen: Object(I.b)(Z),
					wikiPage: A.c
				}),
				ee = Object(o.b)($, (e, t) => ({
					onSaveWikiPage: (i, s) => e((e => {
						let {
							pageContent: t,
							wikiPageName: i,
							revisionReason: s,
							subredditName: a
						} = e;
						return async (e, o, r) => {
							const c = await x({
								context: r.apiContext(),
								pageContent: t,
								revisionReason: s,
								subredditName: a,
								wikiPageName: i
							});
							if (c.ok) e(P({
								pageKey: Object(w.a)({
									subredditName: a,
									wikiPageName: i
								}),
								pageRevisionsListingKey: Object(v.a)({
									subredditName: a,
									wikiPageName: i,
									isRecent: !1
								}),
								recentRevisionsListingKey: Object(v.a)({
									subredditName: a,
									wikiPageName: i,
									isRecent: !0
								})
							})), await e(Object(u.fetchSubredditWikiData)({
								includeDirectory: !0,
								includePageData: !0,
								subredditName: a,
								wikiPageName: i
							}));
							else {
								let t = n.fbt._("Something went wrong", null, {
									hk: "4oNh1E"
								});
								c.body && "RESTRICTED_PAGE" === c.body.reason && (t = n.fbt._("Cannot create/edit restricted page", null, {
									hk: "2pUIkm"
								})), e(Object(h.e)({
									kind: _.b.Error,
									text: t
								}))
							}
							return c.ok
						}
					})({
						pageContent: i,
						revisionReason: s,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return async (t, i) => {
							const n = i().platform.currentPage,
								s = n.locationState && n.locationState[p.a];
							if (e && s) t(Object(l.a)());
							else {
								const {
									subredditName: e,
									wikiPageName: i
								} = n.urlParams, s = Object(N.a)(n.url, {
									subredditName: e,
									wikiPageName: i
								});
								t(Object(l.c)(s))
							}
						}
					}(t)),
					closeAllModals: () => e(Object(d.f)()),
					toggleModal: t => e(Object(d.i)(t))
				}));
			class te extends a.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(M.m)(this.props.isCreation));
						const i = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), i ? this.setState({
							disableBlocking: !0
						}, () => {
							this.props.onFinishWikiEdit()
						}) : this.finishPendingNavTransition(!1))
					}, this.onLeavePageConfirmed = () => {
						this.finishPendingNavTransition(!0)
					}, this.onAbortLeavingPage = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.onCancelAddingRevisionReason = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.showRevisionReasonModal = () => {
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(Y)
					}, this.onCancel = () => {
						this.props.onFinishWikiEdit(!0)
					}, this.onTextChange = e => {
						this.setState({
							markdown: e.target.value
						})
					};
					const t = e.wikiPage && e.wikiPage.content ? e.wikiPage.content.markdown : "";
					this.state = {
						isSavePending: !1,
						markdown: t
					}
				}
				componentDidUpdate(e) {
					const {
						wikiPage: t
					} = this.props;
					if (t && !e.wikiPage) {
						const e = t.content && t.content.markdown || "";
						this.setState({
							markdown: e
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.finishPendingNavTransition(!1)
				}
				finishPendingNavTransition(e) {
					this.props.allowNavigationCallback && this.props.allowNavigationCallback(e)
				}
				render() {
					const {
						isCreation: e,
						isRevisionReasonModalOpen: t,
						isSaveBeforeLeaveModalOpen: i,
						wikiPage: s,
						wikiPageName: o
					} = this.props, {
						disableBlocking: r,
						isSavePending: d,
						markdown: l
					} = this.state, m = s && s.content && s.content.markdown || "", u = !l.trim(), h = l !== m, p = e && s ? Object(L.b)(s.name) : void 0, b = !(!s || s.status !== H.b.PageNotCreated || p), k = !(!s || s.status !== H.b.Valid || !s.isRevisable), g = e ? b : k, f = g && h && !u && !d && !p;
					return a.a.createElement("div", {
						className: Object(c.a)(J.a.container, this.props.className)
					}, a.a.createElement("div", {
						className: Object(c.a)(this.props.topBarClassName, J.a.topBar)
					}, a.a.createElement(y.i, {
						onClick: this.onCancel,
						disabled: d
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(y.f, {
						disabled: !f,
						onClick: this.showRevisionReasonModal
					}, n.fbt._("Save", null, {
						hk: "1zXyaJ"
					}))), a.a.createElement("div", {
						className: Object(c.a)(this.props.contentClassName, J.a.content)
					}, s ? g ? a.a.createElement(j.a, {
						autoFocus: !0,
						className: J.a.resizableTextarea,
						disabled: d,
						onChange: this.onTextChange,
						placeholder: n.fbt._("Add page content here", null, {
							hk: "4fxFCc"
						}),
						value: l
					}) : a.a.createElement(T.a, {
						description: Q(e, s, p),
						title: e ? n.fbt._('"{pageName}" cannot be created', [n.fbt._param("pageName", o)], {
							hk: "235tfC"
						}) : n.fbt._('"{pageName}" cannot be edited', [n.fbt._param("pageName", o)], {
							hk: "4qKJob"
						})
					}) : a.a.createElement(W.a, {
						paragraphsCount: X
					})), t && a.a.createElement(K, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: d
					}), a.a.createElement(C.a, {
						blockOnBeforeUnload: !0,
						dialogId: Z,
						enabled: h && !r
					}), i && a.a.createElement(R.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: n.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: n.fbt._("You have made some changes to your wiki page, do you wish to discard the changes?", null, {
							hk: "4sMjD7"
						}),
						onCancel: this.onAbortLeavingPage,
						onClose: this.onAbortLeavingPage,
						onConfirm: this.onLeavePageConfirmed,
						withOverlay: !0
					}))
				}
			}
			t.a = ee(Object(O.c)(te))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, i) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				d = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				m = i("./src/reddit/constants/wiki.ts"),
				u = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				h = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = i("./src/reddit/selectors/subredditWiki.ts"),
				b = i("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				k = i.n(b);
			const g = Object(o.c)({
					pending: p.a,
					revision: (e, t) => {
						let {
							revisionId: i
						} = t;
						return i ? Object(p.n)(e, {
							revisionId: i
						}) : void 0
					},
					wikiPage: p.c
				}),
				f = Object(a.b)(g);
			class x extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: i,
						revision: a,
						revisionId: o,
						subredditName: p,
						wikiPage: b,
						wikiPageName: g
					} = this.props;
					let f = null;
					f = i ? s.createElement(c.a, null) : b ? b.status === h.b.Valid ? b.content && b.content.markdown : n.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : n.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const x = a || b && b.revision,
						v = !o,
						w = Object(u.a)({
							subredditName: p,
							wikiPageName: g,
							wikiSubRoute: v ? void 0 : m.m.Revisions
						}, t);
					return s.createElement("div", {
						className: Object(r.a)(e, k.a.container, t ? k.a.mModHub : null)
					}, s.createElement(d.a, {
						buttonText: v ? n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: w,
						className: k.a.pageTitle,
						title: !v && x ? n.fbt._("Revision from {timeAgo}", [n.fbt._param("timeAgo", Object(l.b)(x))], {
							hk: "36r4TU"
						}) : n.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), s.createElement("div", {
						className: k.a.content
					}, s.createElement("div", {
						className: k.a.headerRow
					}, x && s.createElement(l.a, {
						isLastRevision: v,
						revision: x,
						showReason: !0,
						showTimeAgo: !1
					})), s.createElement("div", {
						className: k.a.pageSource
					}, f)))
				}
			}
			t.a = f(x)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, i) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/history/esm/history.js"),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				r = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/copyToClipboard/index.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				u = i("./src/reddit/components/TrackingHelper/index.tsx"),
				h = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				p = i("./src/reddit/constants/wiki.ts"),
				b = i("./src/reddit/controls/Button/index.tsx"),
				k = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				g = i("./src/reddit/models/Toast/index.ts"),
				f = i("./src/reddit/selectors/moderatorPermissions.ts"),
				x = i("./src/reddit/selectors/subreddit.ts"),
				v = i("./src/reddit/selectors/subredditWiki.ts"),
				w = i("./src/config.ts"),
				_ = i("./src/reddit/components/OverflowMenu/index.tsx"),
				N = i("./src/reddit/constants/parameters.ts"),
				E = i("./src/reddit/controls/Dropdown/Row.tsx"),
				P = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				C = i("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				R = i.n(C);
			const j = ["right", "bottom"],
				O = ["right", "top"];
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(P.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, i = "".concat(w.a.redditUrl, "/r/").concat(e, "/wiki/").concat(t);
						this.props.onCopyPageUrl(i), this.props.sendEvent(P.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: i,
						subredditName: s,
						wikiPage: a,
						wikiPageName: r
					} = this.props, c = "/r/".concat(s, i ? "/about/wiki" : "/wiki");
					return o.a.createElement(_.b, {
						className: Object(d.a)(e, R.a.container),
						dropdownClassName: R.a.dropdown,
						dropdownId: t,
						targetPosition: j,
						tooltipPosition: O
					}, a && o.a.createElement(E.b, {
						className: R.a.row,
						displayText: n.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: "".concat(c, "/revisions/").concat(r)
					}), a && o.a.createElement(E.b, {
						className: R.a.row,
						displayText: n.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: "".concat(c, "/").concat(r, "?").concat(N.z),
						onClick: this.onViewPageSourceClick
					}), i && o.a.createElement(E.b, {
						className: R.a.row,
						displayText: n.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: "/r/".concat(s, "/wiki/").concat(r)
					}), o.a.createElement(E.b, {
						className: R.a.row,
						displayText: n.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var W = T,
				y = i("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				M = i.n(y);
			const L = Object(c.c)({
					hasWikiModPerms: (e, t) => {
						const i = Object(x.B)(e, t);
						return !!i && Object(f.f)(e, {
							subredditId: i.id
						})
					},
					wikiPage: v.c
				}),
				H = Object(r.b)(L, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(m.e)(Object(m.d)(n.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), g.b.SuccessCommunity)))
					})(t))
				}));
			class I extends o.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: i,
						wikiPageName: a,
						subredditName: r,
						className: c
					} = this.props, l = !!i && i.status === k.b.Valid, m = !!i && i.isRevisable, u = e && m && l, g = t ? "/r/".concat(r, "/about/wiki/edit/").concat(a) : "/r/".concat(r, "/wiki/edit/").concat(a);
					return o.a.createElement("div", {
						className: Object(d.a)(c, M.a.container)
					}, t && i && i.revision && o.a.createElement(h.a, {
						showTimeAgo: !0,
						className: M.a.revisionInfo,
						isLastRevision: !0,
						revision: i.revision
					}), o.a.createElement("div", {
						className: M.a.flexSpacer
					}), u && o.a.createElement(b.k, {
						className: M.a.button,
						to: "/r/".concat(r, "/about/wiki/settings/").concat(a)
					}, n.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && m && o.a.createElement(b.h, {
						className: M.a.button,
						to: Object(s.c)(g, {
							[p.a]: !0
						})
					}, n.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && o.a.createElement(W, {
						className: M.a.overflowMenu,
						dropdownId: "wikiPage-OverflowMenu-".concat(a, "-").concat(t),
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: r,
						wikiPage: i,
						wikiPageName: a
					}))
				}
			}
			t.a = H(Object(u.c)(I))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				s = i("./src/reddit/controls/Button/index.tsx"),
				a = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				o = i.n(a);

			function r(e) {
				const {
					buttonLink: t,
					buttonText: i,
					description: a,
					icon: r,
					onButtonClick: c,
					title: d
				} = e;
				let l = null;
				return i && t ? l = n.createElement(s.h, {
					className: o.a.button,
					onClick: e.onButtonClick,
					to: t
				}, i) : i && c && (l = n.createElement(s.f, {
					className: o.a.button,
					onClick: e.onButtonClick
				}, i)), n.createElement("div", {
					className: o.a.container
				}, r, d && n.createElement("div", {
					className: o.a.title
				}, d), a && n.createElement("div", {
					className: o.a.description
				}, a), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/range.js"),
				s = i.n(n),
				a = i("./node_modules/react/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				d = i.n(c);
			const l = e => a.createElement("div", {
				className: Object(o.a)(e.className, Object(r.b)({
					isLoading: !0
				}))
			});
			t.a = e => a.createElement(a.Fragment, null, e.showTitle && a.createElement(l, {
				className: d.a.placeholderTitle
			}), s()(e.paragraphsCount || 6).map(e => a.createElement("div", {
				className: d.a.placeholderParagraph,
				key: e
			}, s()(10).map(e => a.createElement(l, {
				className: d.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/controls/Button/index.tsx"),
				r = i("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				c = i.n(r);

			function d(e) {
				const {
					buttonLink: t,
					buttonText: i,
					className: n,
					title: r
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(n, c.a.container)
				}, r, i && t && s.a.createElement(o.o, {
					className: c.a.linkButton,
					to: t
				}, i))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return _
			})), i.d(t, "a", (function() {
				return N
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = i("./node_modules/lodash/noop.js"),
				s = i.n(n),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				r = i("./src/higherOrderComponents/asTooltip.tsx"),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/timeAgo/index.ts"),
				m = i("./src/reddit/components/AuthorLink/index.tsx"),
				u = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				h = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = i("./src/reddit/helpers/graphql/helpers.ts"),
				b = i("./src/reddit/models/Post/index.ts"),
				k = i("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				g = i.n(k);
			const {
				fbt: f
			} = i("./node_modules/fbt/lib/FbtPublic.js"), x = ["center", "top"], v = ["center", "bottom"], w = Object(r.a)(h.b), _ = e => {
				const t = new Date(Object(p.d)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						className: e,
						isLastRevision: t,
						revision: i,
						showReason: n = !1,
						showTimeAgo: a = !1
					} = this.props, {
						showTooltip: r
					} = this.state, l = i.authorInfo && i.authorInfo.name || d.A, h = new Date(Object(p.d)(i.revisedAt)), k = o.a.createElement(u.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: s.a
					}, o.a.createElement(m.a, {
						className: g.a.authorLink,
						author: l,
						isAuthorDeleted: Object(b.h)(l),
						isUnstyled: !0
					}, l));
					return o.a.createElement("span", {
						className: Object(c.a)(e, g.a.container)
					}, t ? f._("Last revised by {username}", [f._param("username", k)], {
						hk: "jNOhx"
					}) : f._("Revised by {username}", [f._param("username", k)], {
						hk: "2Q35rs"
					}), a && o.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", _(i), o.a.createElement(w, {
						text: h.toString(),
						isOpen: r,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: x,
						tooltipPosition: v
					})), n && i.reason && o.a.createElement("span", null, " - ", i.reason))
				}
			}
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return o
			})), i.d(t, "g", (function() {
				return r
			})), i.d(t, "m", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "q", (function() {
				return u
			})), i.d(t, "r", (function() {
				return h
			})), i.d(t, "c", (function() {
				return p
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "p", (function() {
				return k
			})), i.d(t, "e", (function() {
				return g
			})), i.d(t, "b", (function() {
				return f
			})), i.d(t, "i", (function() {
				return x
			})), i.d(t, "a", (function() {
				return v
			})), i.d(t, "h", (function() {
				return w
			})), i.d(t, "l", (function() {
				return _
			})), i.d(t, "n", (function() {
				return E
			})), i.d(t, "o", (function() {
				return P
			}));
			var n = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = i("./src/reddit/selectors/telemetry.ts");
			const a = e => Object.assign(Object.assign({}, s.defaults(e)), {
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				o = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, a(e)),
				r = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, a(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				u = c("view_wiki_page"),
				h = c("view_source"),
				p = c("add_wiki_page_contributor"),
				b = c("remove_wiki_page_contributor"),
				k = c("save_wiki_page_settings"),
				g = c("copy_url"),
				f = c("add_wiki_subreddit_contributor"),
				x = c("remove_wiki_subreddit_contributor"),
				v = c("ban_wiki_contributor"),
				w = c("unban_wiki_contributor"),
				_ = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				N = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				E = e => t => Object.assign(Object.assign({}, a(t)), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				P = e => t => Object.assign(Object.assign({}, a(t)), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: N[e]
					})
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				s = i.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki~reddit-components-Wiki-ModHubWikiManagement.787c0e274237200ce6cc.js.map