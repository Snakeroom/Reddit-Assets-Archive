// https://www.redditstatic.com/desktop2x/ChangeUsernameModals.2aee54dd8fe8e56e6bea.js
// Retrieved at 6/10/2020, 5:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChangeUsernameModals"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(c);
			t.a = r.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: r
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!r
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", i.a)
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(o.a, r({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/reddit/components/ChangeUsernameModals/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/interceptedAction.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./node_modules/lodash/debounce.js"),
				h = n.n(p),
				A = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/components/EmailCollection/Input/index.tsx"),
				C = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/lessComponent.tsx"),
				f = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				E = n("./src/reddit/contexts/ApiContext.tsx"),
				v = n("./src/lib/makeApiRequest/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				j = n("./src/reddit/constants/headers.ts"),
				N = n("./src/reddit/components/Settings/SuggestedUsernames/index.m.less"),
				x = n.n(N);
			const U = b.a.wrapped(f.a, "refreshIcon", x.a),
				M = b.a.button("refreshButton", x.a),
				k = e => e > 3 ? 3 : e;
			var y = Object(E.b)(e => {
					const {
						apiContext: t,
						onSuggestedUsernameClick: n
					} = e, [r, c] = Object(s.useState)([0, 0]), [i, l] = Object(s.useState)([]), [d, m] = Object(s.useState)(!1), u = Object(s.useCallback)(async () => {
						m(!0), setTimeout(() => {
							m(!1)
						}, 10 * C.Db);
						const e = await (e => Object(v.a)(Object(O.a)(e, [j.a]), {
							endpoint: "".concat(e.apiUrl, "/api/v1/generate_username.json"),
							method: C.bb.GET
						}))(t());
						if (e.ok && e.body) {
							const {
								usernames: t
							} = e.body;
							if (t && t.length) {
								const e = r[1],
									n = k(t.length);
								l([...i, ...t]), c([e, e + n]), t.length > n && m(!1)
							} else {
								const e = k(i.length);
								c([0, e])
							}
						} else {
							const e = k(i.length);
							c([0, e])
						}
					}, [t, m, l, c, i, r]), p = Object(s.useCallback)(() => {
						const e = r[1],
							t = i.length - e;
						if (t > 0) {
							const n = k(t);
							c([e, e + n])
						} else u()
					}, [u, c, i, r]);
					return Object(s.useEffect)(() => {
						u()
					}, []), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: x.a.refreshContainer
					}, a.fbt._("Can’t think of one? Use one of these:", null, {
						hk: "23kfek"
					}), o.a.createElement(M, {
						disabled: d,
						onClick: p
					}, o.a.createElement(U, null))), o.a.createElement("ul", {
						className: x.a.suggestedUsernames
					}, i.slice(...r).map(e => o.a.createElement("li", {
						className: x.a.suggestedUsername,
						key: e,
						onClick: () => n(e)
					}, e))))
				}),
				w = n("./src/reddit/controls/Button/index.tsx"),
				S = n("./src/reddit/endpoints/usernameAvailable/index.ts"),
				B = n("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				I = n("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				T = n.n(I),
				D = n("./src/reddit/components/Settings/accountModals.m.less"),
				R = n.n(D);
			const _ = 500,
				Q = 20,
				L = 3,
				K = () => a.fbt._("Great name! It's not taken, so it's all yours.", null, {
					hk: "42rpS"
				}),
				P = () => a.fbt._("Sorry, this username is taken. Try another.", null, {
					hk: "2HkykK"
				}),
				H = () => a.fbt._("Username must be between 3 and 20 characters.", null, {
					hk: "1V72yV"
				}),
				J = () => a.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "48Ga9f"
				}),
				V = {
					error: null,
					state: null
				},
				F = {
					error: null,
					state: g.a.Valid
				};
			class Y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = V, this.checkUsername = async e => e.length < L || e.length > Q ? {
						error: H(),
						state: g.a.Invalid
					} : e === this.props.initialUsername ? F : await this.validateUsername(e), this.validateUsername = async e => {
						const {
							apiContext: t
						} = this.props, n = t(), a = await Object(S.a)(n, {
							username: e
						});
						return a.ok ? !0 === a.body ? F : {
							error: P(),
							state: g.a.Invalid
						} : a.error && a.error.fields && a.error.fields[0] ? {
							error: a.error.fields[0].msg,
							state: g.a.Invalid
						} : {
							error: J(),
							state: g.a.Invalid
						}
					}, this.callCheckUsername = async e => {
						const {
							error: t,
							state: n
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: n
						})
					}, this.debounceCheckUsername = h()(this.callCheckUsername, _), this.handleContinue = async () => {
						const {
							username: e
						} = this.props, {
							error: t,
							state: n
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: n
						}), n === g.a.Valid && this.props.onContinue()
					}, this.updateUsernameField = async e => {
						const t = e.currentTarget.value;
						this.props.onUsernameChange(t), this.debounceCheckUsername(t)
					}, this.onSuggestedUsernameClickHandler = e => {
						this.props.onUsernameChange(e), this.setState(F), this.props.onSelect()
					}, this.onCloseModal = () => {
						this.props.onUsernameChange(this.props.initialUsername), this.props.onClose(), this.setState(V)
					}
				}
				componentDidMount() {
					const {
						username: e
					} = this.props;
					this.callCheckUsername(e), this.props.onView()
				}
				render() {
					const {
						initialUsername: e,
						isResponsive: t,
						username: n
					} = this.props, {
						error: s,
						state: r
					} = this.state, c = r === g.a.Valid, i = n === e;
					return o.a.createElement(B.a, {
						bodyClassName: R.a.changeUsernameModalBody,
						className: Object(A.a)(R.a.changeUsernameModalContainer, {
							[R.a["m-responsive"]]: t
						}),
						onClose: this.onCloseModal,
						title: this.props.title
					}, o.a.createElement(g.b, {
						className: Object(A.a)(R.a.input, R.a.usernameInput),
						errorMessage: s || void 0,
						onChange: this.updateUsernameField,
						spellCheck: !1,
						successMessage: c && !i && K() || void 0,
						value: n,
						validityState: r || void 0
					}), o.a.createElement(y, {
						onSuggestedUsernameClick: this.onSuggestedUsernameClickHandler
					}), o.a.createElement("div", {
						className: T.a.buttonWrapper
					}, o.a.createElement(w.f, {
						className: Object(A.a)(T.a.commonBtn, T.a.primaryBtn),
						disabled: !c,
						onClick: this.handleContinue
					}, a.fbt._("Continue", null, {
						hk: "3a8GoU"
					}))))
				}
			}
			var z = Object(E.b)(Y),
				Z = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					viewBox: "0 0 22 33",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M11.5892 0.108026C8.08052 0.108026 4.66647 1.24605 1.8595 3.35127C1.52801 3.58772 1.25301 3.89466 1.05426 4.25005C0.855522 4.60543 0.737974 5.00043 0.710066 5.40665C0.682158 5.81287 0.744583 6.22023 0.892855 6.59946C1.04113 6.97868 1.27157 7.32035 1.56761 7.59992L1.7622 7.79451C2.24701 8.21875 2.86933 8.4526 3.51355 8.4526C4.15778 8.4526 4.7801 8.21875 5.26491 7.79451C6.88036 6.49442 8.86893 5.74445 10.9406 5.65397C13.5352 5.65397 14.9946 6.85397 14.9946 8.57289C14.9946 10.2918 13.9244 11.6215 11.5568 12.9837C9.57432 13.9788 8.03569 15.6794 7.24328 17.7513C6.98395 18.2114 6.81859 18.7186 6.7568 19.2432C6.74223 19.8498 6.91502 20.4462 7.25162 20.9511C7.58823 21.456 8.07229 21.8449 8.63788 22.0648C9.00788 22.218 9.40496 22.2953 9.80544 22.2918C10.6092 22.2897 11.3836 21.9892 11.9784 21.4486C12.3266 21.049 12.5716 20.5702 12.6919 20.054L12.919 19.2432C13.2108 17.6864 14.0865 16.8432 16.6163 15.5459C18.1368 14.9535 19.4381 13.9073 20.3434 12.5495C21.2486 11.1917 21.7138 9.58811 21.6757 7.95667C21.6757 3.41613 18.1081 0.108026 11.5892 0.108026Z",
					fill: "#FF585B"
				}), o.a.createElement("path", {
					d: "M9.99999 32.2163C9.57316 32.2187 9.15004 32.1369 8.75489 31.9755C8.35974 31.8141 8.00034 31.5763 7.69729 31.2757C7.41081 30.9605 7.18045 30.5985 7.01621 30.2055C6.85002 29.8155 6.76188 29.3968 6.75675 28.973C6.7687 28.1143 7.10464 27.2918 7.69729 26.6703C8.00573 26.375 8.36945 26.1436 8.76756 25.9892C9.35819 25.7409 10.0092 25.673 10.6383 25.7942C11.2675 25.9154 11.8466 26.2203 12.3027 26.6703C12.8953 27.2918 13.2313 28.1143 13.2432 28.973C13.2381 29.3968 13.15 29.8155 12.9838 30.2055C12.8195 30.5985 12.5892 30.9605 12.3027 31.2757C11.9996 31.5763 11.6402 31.8141 11.2451 31.9755C10.8499 32.1369 10.4268 32.2187 9.99999 32.2163Z",
					fill: "#FF585B"
				})),
				W = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 41 55",
					enableBackground: "new 0 0 41 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("image", {
					id: "image0",
					width: "41",
					height: "55",
					x: "0",
					y: "0",
					href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA3CAYAAACRvGMdAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5AQVDiwo1VwcBwAAEERJREFUaN7VWmlwVNeV/u57r/v1pt60tdRI3VpoCckIIYRZLQxi scFOcACXmIEU8VAxTnlsw2Rcdo0TV2qmMnHwuIhDGAeviRdix8ZkbKCCsWRJyAixyQhJSIhGe7fUavX2eu/37vwQEDBItFyTH3Oq3h/1ffd+9zv3nHvO9wT8PzAy3RcyMjIQCAR08+fP//6iRYvma7Va tLa2njh69OhhvV4vDA4OAgBMJhOKiopw9epVllJKGYaR+vr6/v47ysvLAwD15s2bX6+trY15vV4qCAJtbW0Nv/jii7sB8IWFhVCpVMjLy4PVas23Wq3vWK3WV6xWa4bVav1O67LJDszOzkZOTg6MRuPD O3fufHH16tUKhUIBuVwOk8nEpaWlzRQEob60tHRweHgYAMwAfgUgD8B9AIIMw5wkhCAcDk8LJDOdwVu2bIFarV40Y8YM1c1/p5QiJydHt23bNuOSJUsAwAJgHyaO03oAHwJYIYqiIiUlZdpMJg1SkiR0 dXUBQCiRSCAWjSEWiwEAfD4fRkdGEu3t7eqnn366AsDLAIYAPE0IGQNwAUARIcREyLTDIHl3sywLl8sFj8ejzM7OXi+Xy+X9fX0QBAEjTieOf/mlf+/eveA4biaAw5TS3wHwMQwDSukcAA8D+JgQ4hRF 8cYG/09BRqNRqFQqOJ1Oh9vttoBgjlKpJA7HML6qr08cOnTobZfL9TOZTHYkEolcJIQkKKXgOA6U0k0AFgD4AyHEOTY2Bkpp0iC56dCelZUFQRCC3d3dz46MjLSnpaUtAICxsbFTgiD8kRDiGh4evsGS 1WqFKIocgFkAfADclFKIojgtd0//gNzuCQpAutOP11JOIYAvAJyjlNYQQuK9vb3TWmRaTN4JpFKpTJXL5ZmEEJUkSZIoigFRFH2iKHpsNluwu7v7ewCyAfyCYZj4wMDAtBeZFkiZTIZEIsGmpKTYDAbD GpPJtCw9Pb3IZDKlZ2VlyUVRpIIgRBwOR2B0dHRgaGjosiRJlZIkXZUk6ZRcLkcikZg2yLu6W6lUIhwOKyoqKgojkUgRz/PLKioq1i9evNhcUVHBmM1mpKSkgOd5AEAikUAwGMTY2BgGBwfR1tZGW1pa wna7vVEQhD+73e4jQ0ND4wBihBCaTABNCtJoNGJ8fBz5+fn3Ll++fBdhuWUX29tTt23bxm1+dBPRarVJsUApRSQSQVdXF95+++34119/3cnz/IggCL1jY2NNgiB8znGcOxqNQhCEO85xxxSUmpoKo9EI hUJx74aNG9+dW16+bKzuU83icC/rH+ol7U4vTBYr9DrdpMAAgBACQghkMhlYloVWq2VramoyN23aVFBVVTXPZDI9JAhCycjISLNarfZOBvKOTObl5cHpdKZVV1e/v+2xf1p9+a1fYZv/FEw8EEoAdUEl ak0LMWfjY5hVWgpJkjDudmPE4YBnbASBcTdYhQrWQhsWLFyAfKsVsVgMHMeB4/4WBpIkoa6uDrt3737/+PHjO7Kzs4U7BdZtgaPT6cBxHNLT0x+6p2zOistHP8Im32mkywEhDqg5YJ0ujDJvPf7621Z8 zmpBKaAUI7CQIMqYGFREQkBiYBeV+LWuCJU127F169ZbAAIAwzCorq7G2NjYpoGBgQaz2bxfJpPBbrdP7e60tDT09vaSXIv1KT3PzlvdcwTlfASfKmbhUuk66EZ7oCNx6DiKuYoI7pf7sJz3YakyiDJF DPm8iBy5hAK5iEplFHPjDnx18jQGoMHsufPAMLeXC+np6WxbWxt36NChT4xGY8Lj8dy6mdv8Twh4hQK+YNDPXWxEFe/H+QiP6PeexLKf/hLjWuuN1E0AEHLtufa+K8HgE2LBgczlqNfNhlYGPKN1YvDA q2g9f+6OZ06r1cJms2kByK5niSlBSpIES5aJMonEmSq5X+QZoJvRw3LPXOhlDLIVk1/3QRF4Sz4bqS+8iwdf+x+Y/v1DnDOWw8BQPCj24uxnnyAh3no5UUoxPDQMh8MxDiAaj8eTA6llJGhYajTJRBYA hAQwMOzEX19/FUpX16SJ63KEhfL+jVhWdR/0KRrk2YrA55cjIQFzlDFknPkMPZ0dcLlciMfiEEURgiDgypUeDA0NnTz8+eE7lka3BQ7HcThd3I/CdkuxLzHhxxImgDf+6+dYKg5DqYtOeQV43G7EYjHw cjloPIYc0QsGAMcCS0JdaHpzN/iVNTAYDWBZBqFgEB0dHe3d3d0fP/f8c7h8+fLdQRJCQA6DKZmt13+jUqM62oElihDuES+CJ0AwDgSveUzDAGoWYJmJA1qkEEEaD+Lll4wonjULhp7TWNz9FZhrZUiG TMSKzoO4qtfAaVuIYFzCxa7uzubz5/+ls7PzslqtvuPGb+PEbDZjcHAQK1as+M2Pf7TtKXq+FmLPeYgUiOszIcvKgzwtGxKVwPhc0PRfRLHzAnIlH3gO8IkExwNK+CUZlimDyFckbl2FAh0Cg4tsJgK5 5YgVznnuibX3v0QWPTCpd25jMhaLYf78+QiFQp3GTBNd9tIbZGR0FMBEFKao1WAZAgogIUnweX3oP3cKdX95E/mdx2ChfmzQhSaA0YlHFIEoBYKEx6jaBG9RJYyzFsJWsVBy+ISRvqxibN26Fe+++25y IDmOg9vthtfrbW5raxtdtWpVZq45GwAwMjKC1rNnYLPZkJWVBRnDIM1oQNrKBxBYeB/sTXWoPfI+UnrPQxv2QeI4hFR6JEyFSCkog8ZWBt3MUuTnWqFUKjAwMOA91nig037lCurr65Nn0uPxwGw2w+Px dDQ3N39mt9u3FxQU3GD5yJEj2LdvH6qrq1FVVYX09HTwPI9oNAp9yRzkLLgPIZ8XEZ8PhOOQodNDZzRCqeDB3NSEJRIJtLe3n//ggw86Zs6cif7+/klBThqnNpsNPp+vcNeuXQd27NhReb3qiUQi+Oab b9Dc3AyXywWlUgmtVguLxYKCggLYbDbIZDLczXp7e0PvvPPOj7ds2fJ+SUkJ7pQfk7IdO3agtLR06SuvvNLlcrnoty0ajdJgMEgFQaCiKNJkzeVyJT7++OPflpeXK2tqar4buJuNUoqCgoKlO3fuPHH6 9Ol4LBZLGsy3LR6P00uXLoXfeuutvdu3bze88MILSWFIqhHLy8uDy+UqmDdv3p4H16xZt2TRQjKzdDaMRiNk7NT6AqUU4XAY/QMD0XNnz7Y2Njb+vr6+/sP09PRQQ0NDUiCn7HHMZjNEUUQgEMjOycn5 1wfXrlvKCx6cffYfcMVSADJzLtKKy5FuyYcxMwsqtRoSKMCwEAQBfr8fIyMjOPyXQ2htbXX2jbh+9vjjO7641NWFzs7OpL05JZMmkwnhcDirqKjotSeeeOLh9evXk1f37EHXR/uxRimAUopcnkLJy0B4 DdycFp0pVtz7+E9hyMgAL5dDoVDgtX37cO7gHxGlpLUzKn9CzbLNkUQMQwP9SYGctKTJz8/HwMAAV1lZ+Ytdu3b9sKamhpw5cwZfNzbANtqBi1EZVmijMMsSqCXZ6NflwJ9Xjtz712LZqjUwm7ORmpoK nU6HuRXz0H7pEha620xxsEvtMbaN5di+1BQNvH7/XUFOeqAopTAYDLPXrVu3ecOGDcTtduPLujqM914Go06B3zADDJWgIBJw71qYNz8D66ofoGzhEoBMyDLXzWg0YMP2n8ChysBTRk/xbEV0T1CktiiT XEc9KUiWZaHRaFQFBQUqhmHQ3t4OlhDMX/MQ7v2Pt/H879/DscJ1OBJKQWpBEfItOSibXYoZOTNAKYXdbr9FTllQOQ90/oMgVMSzqZ65s+Txn48kGE22Je+7u1uv10MQBPXy5ctrysvLUxoaGqDRaPDk k/8Mq8WCzIwM6POLcZEYsOEft6KgsAB6vf5GZ9hyqgV+jwfmnJwbmx73Cxg5cRQbdQIoSFFXTD78Q43/TJ86C16vZ1KQkzLJMAzcbvfVs2fPHh4dHUUoFILBYAAwUc4BQFlZGXY9/2/IyMgAy7K4WXuM RaMYcTpvmdM/PoYsdqKufVQb4NdpQs+86jMU3U0gmJTJl19+GePj4+KFCxfOZ2Zm3uPxeApMJhNsNtuNMYQQMAyDbwujHR0d8Pv9qF696sYVOTDsQP3vfolHYt1QsQDPUBhZKa01ytMLbvUxq0lNvT7f 9Jh87LHH0NjYiEcffXSwtrb2J42NjXUul+uu58fhcGBoaAjVK6uhUk2o1sFwGJ/s34tqxwmkyf82tkwRxVJl5Ac6bayYMJNfCncVURsaGhAKhTxXrlzxlpaWPlJVVTVlSJ47dw6zZs2C0WgEAHi8Xrzx 6h6ae2wvVqsChBDAJzLoiPJilBKiYqjmbIT/WsvStqHxOzOZVA6glEIQhA6HwzEajUZz7tR2AhNNnMPhgFarBcMwGB0dpQf+9Kfuuj9/cHR3RmgjQzCjP84lPvBpjx0JqD9K5cSZVllik5KhUdkUt2tS ICVJQjgcHujr6/tmdHQ0J+daxH7bGIbBokWL0NLSguNfHMfY2Jiztq72R2d6+k4e4DOG3RL3fEtI8eZ/u/X/mclHxhvH9ayOj76ewkruqQT/pDRzlUqFysrKhNPpTJ83b94D+fn5k86o1+tRUlICtUoF gA66x8d/YzKZhBanv/1UWFlfH1S9DwL/YF8fEHTRqN/j83u9Mf8UKShpYT8Wi2F4eDiQn5///cWLF2uZKQ46IQQqtRocy42eOHHiD2q1OniiqSnq9Pj6Qn5PPOz3JLvshIeSGRQIBEAIQSAQuNzU1HSi p6cHvb29iEQik76j1WqhUCrStFptusFgQFpa2rSA3WxJy9F2ux0lJSXxjo6OQy0tLY9UVlbyhw4dglarhUajATBR2l3vhwCAZVldKBSyaDSai98ZYbJMXrdwOIyrV68ea2pqasrMzMTKlSsRi8Xw6cGD 2LNnT+LUqVPRm8er1Wo+MzMzs7i4GGaz+e/PpNFovK7gxgVBCAiCgNzcXMyvrAQvk8N+9aqzo6MjIQiC9TqzHMeRSCRiKC4uxnQ/iyQN0mq1glJKKKVyhmEU4XA4UlJSsmTTpk2rcnNzAQApKVqwLCue PXfWk5GRYb1ZKPV4PLDb7czatWt5i8VC9Hp9BACm+937NncbjUakpqZCr9eDUioDkEoIMQLQ8zyfD2CWXC7ngIkkHxAC9OSp5o7m5mZPVVVVikKhuDFXZ2dnuKenR2OxWNYSQpYSQooAZJvNZsyYMeO7 M3ldiPd6vdDpdGkAjNeedIZh1IFAIL5///7aoaGhYkpp/OTJk5caGhq+jMfj97S0tCypqqpilUolzpw5g/fee68tEokMyWQyHQA1gCAAh9frvVFRJWOTJuW8vDxIkmQkhCwBoAWgBMASQhCPx4kkSQoA EiEkLJPJopRSpUKhWLt48eIFqamptKWlpfXKlSsHZTLZGIAEJpShfkpp53Q/3U0K0mKxgFIKhmFSAOgApAJQXHuHARC7tngUQIhSGpUkKSMcDqfGYjGB47h+rVYbpZSqAXiubUhOKY0aDIao3W6HP4n+ ZkqQ07Vv/3/Ft5m6XhVdt/Hx8aTn/l+a53EHBmLj4wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0yMVQxNDo0NDozOCswMDowMMZEe9oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMjFUMTQ6 NDQ6NDArMDA6MDCOM4QYAAAAAElFTkSuQmCC"
				}));
			var q = e => (Object(s.useEffect)(e.onView, []), o.a.createElement(B.a, {
					bodyClassName: R.a.confirmModalBody,
					className: Object(A.a)(R.a.confirmModalContainer, {
						[R.a["m-responsive"]]: e.isResponsive
					}),
					description: e.description,
					descriptionClassName: Object(A.a)(R.a.confirmModalDescription, {
						[R.a.saveDescription]: e.isSaveConfirm
					}),
					headerClassName: R.a.confirmModalHeader,
					icon: e.isSecondConfirm ? o.a.createElement(Z, null) : o.a.createElement(W, null),
					iconClassName: Object(A.a)(R.a.confirmModalIcon, {
						[R.a.questionIcon]: e.isSecondConfirm
					}),
					onClose: e.onClose
				}, o.a.createElement("div", {
					className: T.a.username
				}, o.a.createElement("span", {
					className: T.a.usernamePrefix
				}, "u/"), e.username), o.a.createElement("div", {
					className: T.a.buttonWrapper
				}, o.a.createElement(w.f, {
					className: Object(A.a)(T.a.commonBtn, T.a.primaryBtn),
					disabled: e.isSaving,
					onClick: e.onPrimaryButtonClick
				}, e.primaryButtonText()), o.a.createElement(w.n, {
					className: Object(A.a)(T.a.commonBtn, T.a.secondaryBtn),
					disabled: e.isSaving,
					onClick: e.onSecondaryButtonClick
				}, e.secondaryButtonText())))),
				G = n("./src/reddit/components/Settings/modalIds.ts");
			var X = n("./src/reddit/helpers/trackers/changeUsername.ts"),
				$ = n("./src/reddit/hooks/useTracking.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/activeModalId.ts");
			const ne = () => a.fbt._("Change Username", null, {
					hk: "1nRhNE"
				}),
				ae = () => a.fbt._("Keep Username", null, {
					hk: "4hDTRV"
				}),
				se = () => a.fbt._("Save Username", null, {
					hk: "2Ufmnc"
				}),
				oe = () => a.fbt._("Saving Username", null, {
					hk: "deHEB"
				}),
				re = () => a.fbt._("Go Back", null, {
					hk: "3hUBIW"
				}),
				ce = e => a.fbt._("Nice name, u/{username}. May it serve you well.", [a.fbt._param("username", e)], {
					hk: "3TWtHg"
				}),
				ie = e => e && e.fields && e.fields.length ? e.fields.map(e => {
					let {
						msg: t
					} = e;
					return t
				}).join(", ") : (() => a.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "3HcWgL"
				}))(),
				le = Object(c.c)({
					changeUsernameModalOpen: Object(te.b)(G.b),
					confirmSaveUsernameModalOpen: Object(te.b)(G.d),
					interceptActionModalOpen: Object(te.b)(G.e),
					secondConfirmKeepUsernameModalOpen: Object(te.b)(G.f)
				}),
				de = Object(r.b)(le, e => ({
					closeModal: () => {
						e(Object(m.f)()), e(Object(d.d)())
					},
					confirmChangeUsername: () => {
						e(Object(m.h)(G.b))
					},
					confirmKeepUsername: () => {
						e(Object(m.h)(G.f))
					},
					continueChangeUsername: () => {
						e(Object(m.h)(G.d))
					},
					goBack: () => {
						e(Object(m.h)(G.b))
					},
					saveUsernameError: t => {
						e(Object(u.e)({
							duration: u.a,
							kind: ee.b.Error,
							text: t
						}))
					},
					saveUsernameSuccess: (t, n) => {
						e(Object(m.f)()), e(Object(u.e)({
							kind: ee.b.SuccessCommunityGreen,
							text: ce(t)
						})), e(Object(l.e)(t, n))
					}
				}));
			t.default = Object(i.a)(Object(E.b)(de(e => {
				let {
					apiContext: t,
					changeUsernameModalOpen: n,
					closeModal: r,
					confirmChangeUsername: c,
					confirmKeepUsername: i,
					confirmSaveUsernameModalOpen: l,
					continueChangeUsername: d,
					goBack: m,
					interceptActionModalOpen: u,
					isResponsiveSettingsEnabled: p,
					saveUsernameError: h,
					saveUsernameSuccess: A,
					secondConfirmKeepUsernameModalOpen: g,
					username: b
				} = e;
				const [f, E] = Object(s.useState)(b || ""), [N, x] = Object(s.useState)(!1), U = Object($.a)(), M = Object(s.useCallback)(async () => {
					x(!0);
					const e = await ((e, t) => Object(v.a)(Object(O.a)(e, [j.a]), {
						method: C.bb.POST,
						endpoint: "".concat(e.apiUrl, "/api/update_name"),
						data: {
							api_type: "json",
							new_name: t
						},
						type: "form"
					}))(t(), f);
					e.ok ? (A(f, b), U(Object(X.j)())) : h(ie(e.error)), x(!1)
				}, [t, b, U, h, A, f]);
				return o.a.createElement(s.Fragment, null, u && o.a.createElement(q, {
					description: a.fbt._("Before continuing, confirm that you want to keep this as your Reddit username.", null, {
						hk: "14rKrO"
					}),
					isResponsive: p,
					onPrimaryButtonClick: () => {
						c(), U(Object(X.d)(X.a, "change"))
					},
					onSecondaryButtonClick: () => {
						i(), U(Object(X.d)(X.a, "keep"))
					},
					onView: () => {
						U(Object(X.h)(X.a, !0))
					},
					primaryButtonText: ne,
					secondaryButtonText: ae,
					username: f
				}), g && o.a.createElement(q, {
					description: a.fbt._("Ok, just to confirm your confirmation… Are you absolutely sure? This will be your name forever.", null, {
						hk: "4lvkUG"
					}),
					isResponsive: p,
					isSaving: N,
					isSecondConfirm: !0,
					onClose: r,
					onPrimaryButtonClick: () => {
						M(), U(Object(X.c)("keep"))
					},
					onSecondaryButtonClick: () => {
						c(), U(Object(X.c)("change"))
					},
					onView: () => {
						U(Object(X.g)())
					},
					primaryButtonText: N ? oe : ae,
					secondaryButtonText: ne,
					username: f
				}), n && o.a.createElement(z, {
					initialUsername: b || "",
					isResponsive: p,
					onClose: r,
					onContinue: () => {
						d(), U(Object(X.e)())
					},
					onSelect: () => {
						U(Object(X.f)())
					},
					onUsernameChange: E,
					onView: () => {
						U(Object(X.i)())
					},
					title: a.fbt._("Change username", null, {
						hk: "17XB7v"
					}),
					username: f
				}), l && o.a.createElement(q, {
					description: a.fbt._("Are you sure? This will be your username forever.", null, {
						hk: "3JACTO"
					}),
					isResponsive: p,
					isSaveConfirm: !0,
					isSaving: N,
					onClose: r,
					onPrimaryButtonClick: () => {
						M(), U(Object(X.c)("save"))
					},
					onSecondaryButtonClick: () => {
						m(), U(Object(X.c)("go_back"))
					},
					onView: () => {
						U(Object(X.g)())
					},
					primaryButtonText: N ? oe : se,
					secondaryButtonText: re,
					username: f
				}))
			})))
		},
		"./src/reddit/components/ChangeUsernameTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2-ldLIsQN5O_ifhbTuAc_g",
				closeWrapper: "_2rTvRcuKpM60TWFtmch-9c",
				container: "_14TDRVDZJj2YqAP-N0a4kj",
				topLine: "k_Oo03XySnmf-UMMOirS-",
				title: "_3pcdqdRWruf7eepiLXw4CB",
				username: "_1G1CITYgxpC6TIO7TGwhG3",
				usernamePrefix: "_1Tq29ay6ogsCeK60Ouhv_q",
				buttonWrapper: "lvHFLjGg76LoUfNXv4eik",
				commonBtn: "_2c8uIH6hCLT9iEVO5N8-9o",
				primaryBtn: "qUwq87ZWjStAxoxwoPOJA",
				secondaryBtn: "MnLwM5PL1ET2BmK5lLIvR"
			}
		},
		"./src/reddit/components/EmailCollection/Input/index.m.less": function(e, t, n) {
			e.exports = {
				container: "M73o_fEhhOMc2JuxLwwPR",
				valid: "_3dfVIk-FM3_3QxLpXlw4Ax",
				input: "_203UbdiXH6Cj6YZENbPam9",
				icon: "_1vHLOIwSJKsFawBZraDyzT",
				invalid: "_2WganpuBTSPhSySiCLFd_j",
				error: "_3NWIeF4tDMa1pNRs_ZFVE5",
				success: "_1TX1trRHZhQtSbH6eCqoeE"
			}
		},
		"./src/reddit/components/EmailCollection/Input/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				c = n("./src/reddit/icons/svgs/Warning/index.tsx"),
				i = n("./src/reddit/components/EmailCollection/Input/index.m.less"),
				l = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var m, u = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(m || (m = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: n,
					successMessage: a,
					validityState: i
				} = e, p = u(e, ["className", "errorMessage", "successMessage", "validityState"]), h = i === m.Valid, A = i === m.Invalid;
				return s.a.createElement("div", {
					className: Object(o.a)(l.a.container, h && l.a.valid, A && l.a.invalid, t)
				}, s.a.createElement("input", d({}, p, {
					className: l.a.input
				})), h && s.a.createElement("div", {
					className: l.a.icon
				}, s.a.createElement(r.a, null)), A && s.a.createElement("div", {
					className: l.a.icon
				}, s.a.createElement(c.a, null)), A && n && s.a.createElement("p", {
					className: l.a.error
				}, n), h && a && s.a.createElement("p", {
					className: l.a.success
				}, a))
			}
		},
		"./src/reddit/components/Settings/ModalContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1AaXuuXcppN6z3lyjemnkL",
				closeButton: "_2n58ofMJPg93rBexzKK_eC",
				closeIcon: "_1-aRvaXjqzrU9zAXYkO31N",
				header: "_3A-cwt8Ht4zvde70Pjy__E",
				icon: "_1x_pYy_fmCQxsGD3ovvgfw",
				title: "_19eT5Znm4YIntTUHAcYrX3",
				description: "veTQ6x5JgIlwMg7Auj1Sd",
				body: "iTEI6v2GvrdU6pwBMDd_j"
			}
		},
		"./src/reddit/components/Settings/ModalContainer/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				i = n.n(c);
			t.a = e => {
				const {
					bodyClassName: t,
					children: n,
					className: a,
					description: c,
					descriptionClassName: l,
					headerClassName: d,
					icon: m,
					iconClassName: u,
					onClose: p,
					title: h
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.container, a)
				}, p && s.a.createElement("button", {
					className: i.a.closeButton,
					onClick: p
				}, s.a.createElement(r.a, {
					className: i.a.closeIcon
				})), s.a.createElement("div", {
					className: Object(o.a)(i.a.header, d)
				}, m && s.a.createElement("div", {
					className: Object(o.a)(i.a.icon, u)
				}, m), s.a.createElement("h2", {
					className: i.a.title
				}, h)), c && s.a.createElement("p", {
					className: Object(o.a)(i.a.description, l)
				}, c), s.a.createElement("div", {
					className: Object(o.a)(i.a.body, t)
				}, n))
			}
		},
		"./src/reddit/components/Settings/SuggestedUsernames/index.m.less": function(e, t, n) {
			e.exports = {
				suggestedUsernames: "_1E2kAa0tJoEy_JkCDssPe3",
				suggestedUsername: "YfJBUmZCRoeR0KkYmxUA5",
				refreshContainer: "_2IjK-L5x_zM-2yHDk5Kkym",
				refreshButton: "_1Z5t703wkMd44jwxPP0cIw",
				refreshIcon: "_27lXx2em8b5a9bWaBDnNke"
			}
		},
		"./src/reddit/components/Settings/accountModals.m.less": function(e, t, n) {
			e.exports = {
				buttonWrapper: "_3bwuX1FpzX5u_wA4guPMPr",
				input: "RrqK6usE8PEMhLL7FD-iE",
				checkboxLabel: "OBgeR3lNas33iO_RB1buN",
				primaryBtn: "_1ZuJ4cYdwXBjhOxsWSpt_J",
				toggle: "brX0v5qpkg7KN-bOajuQ7",
				description: "hfVDp17HN3YB0M-CBz_f7",
				"m-responsive": "_1RdzLLJTzHMuKTT451B8mz",
				mResponsive: "_1RdzLLJTzHMuKTT451B8mz",
				changeUsernameModalContainer: "_9hmSLlBvZA-2tPAVajB6F",
				confirmModalContainer: "ZdQ8dYkTCSltA50W7-IE3",
				changeUsernameModalBody: "_1Yly3HtP1iwII2uUEMTTKL",
				confirmModalBody: "_1yaWiT2tGW8c-WyQ2DxiNY",
				confirmModalHeader: "_19OEdjo2DQZ1GMEXsY7vZ3",
				confirmModalDescription: "JB3thd-iYucgTQHskJ_6g",
				saveDescription: "_3Yj6lPp8gZJ6YcXvbva9hO",
				confirmModalIcon: "_2nFUIwSqAux1OcismY38n4",
				questionIcon: "pg0_xOJ41KOzSjQt9g3FB",
				usernameInput: "_1Ti06LupexmG0XRXRqTBZQ"
			}
		},
		"./src/reddit/helpers/trackers/changeUsername.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "j", (function() {
				return j
			}));
			var a, s, o = n("./src/reddit/actions/comment/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/actions.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/routes/postCreation/constants.ts"),
				m = n("./src/reddit/selectors/interceptedAction.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CHANGE_USERNAME_INITIAL = "change_username_initial", e.CHANGE_USERNAME_CONFIRMATION = "change_username_confirmation", e.CHANGE_USERNAME_INPUT = "change_username_input", e.CHANGE_USERNAME_SUCCESS = "change_username_success"
			}(a || (a = {})),
			function(e) {
				e.COMMENT = "comment", e.CUSTOM_FEED = "custom_feed", e.POST = "post", e.UNKNOWN = "unknown"
			}(s || (s = {}));
			const p = "popup",
				h = "tooltip",
				A = e => {
					if (!e) return s.UNKNOWN;
					switch (e.type) {
						case o.p:
						case o.j:
							return s.COMMENT;
						case r.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return s.CUSTOM_FEED;
							break;
						case c.a:
							if (e.payload.args && e.payload.args[0] && "string" == typeof e.payload.args[0] && e.payload.args[0].includes(d.b)) return s.POST
					}
					return s.UNKNOWN
				},
				g = (e, t) => n => Object.assign({}, Object(u.defaults)(n), {
					action: l.c.VIEW,
					actionInfo: Object(u.actionInfo)(n, {
						reason: t ? A(Object(m.a)(n)) : void 0
					}),
					noun: a.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				C = (e, t) => n => Object.assign({}, Object(u.defaults)(n), {
					action: l.c.CLICK,
					noun: a.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: t
					},
					source: e
				}),
				b = () => e => Object.assign({}, Object(u.defaults)(e), {
					action: l.c.VIEW,
					noun: a.CHANGE_USERNAME_CONFIRMATION,
					source: p
				}),
				f = e => t => Object.assign({}, Object(u.defaults)(t), {
					action: l.c.CLICK,
					noun: a.CHANGE_USERNAME_CONFIRMATION,
					source: p,
					popup: {
						buttonText: e
					}
				}),
				E = () => e => Object.assign({}, Object(u.defaults)(e), {
					action: l.c.VIEW,
					noun: a.CHANGE_USERNAME_INPUT,
					source: p
				}),
				v = () => e => Object.assign({}, Object(u.defaults)(e), {
					action: l.c.CLICK,
					noun: a.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: p
				}),
				O = () => e => Object.assign({}, Object(u.defaults)(e), {
					action: l.c.SELECT,
					noun: a.CHANGE_USERNAME_INPUT,
					source: p
				}),
				j = () => e => Object.assign({}, Object(u.defaults)(e), {
					action: l.c.VIEW,
					noun: a.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Warning/index.m.less"),
				c = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(c.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), s.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=ChangeUsernameModals.2aee54dd8fe8e56e6bea.js.map